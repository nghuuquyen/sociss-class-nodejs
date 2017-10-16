# 1. Giới thiệu

Chào các bạn, lần này mình sẽ giới thiệu đến các bạn chi tiết hơn về kỹ thuật Routing ( Định tuyến ) trong Node.js . Như các bạn đã biết một web server sẽ đáp ứng một request tương ứng với một Path (đường dẫn) và method cụ thể. 

Trong bài học lần này

Ví dụ: 

mình giả dụ có những URL như sau: 

/author/abcd       -> Trả về trang HTML chứa thông tin của tác giả có username là 'abcd'
/api/author/abcd -> Trả về chuỗi JSON chứa thông tin tác giả có username là 'abcd'


# 2. Kiến thức và công cụ cần thiết

## 2.1 Kiến thức 

Trong bài học lần này là phân nâng cao của bài học trước, chính vì vậy mình mong muốn các bạn hiểu nội dùng trong bài học này trước, sau đó hãy tiếp tục đọc đến bài này.

## 2.2 Công cụ 

Vẫn như những bài học trước, chúng ta vẫn chỉ cần máy tính cài đặt Node.js và một text editor là được.


# 3. Nội dung bài học

## 3.1 Routing là gì ?

Routing trong Node.js là một khái niệm nói đến việc xác định ứng dụng sẽ đáp ứng như thế nào khi người dùng tạo một request đến một endpoint (Điểm cuối) cụ thể nào đó. Điểm cuối đó thường là một URI hoặc một đường dẫn (Path) với một Request method (POST, PUT, GET, ...) cụ thể.

## 3.2 Cấu trúc định tuyến cơ bản 

Trong express.js định tuyến có cấu trúc như sau 

app.METHOD(Path, Handler...) 

Trong đó:

+ **app** : là một instance của express
+ **METHOD**: là một HTTP Method
+ **Path**: là một đường dẫn trên máy chủ 
+ **Handler** : là một function sẽ thực thi khi một **route** được trùng khớp 


**Giải thích**

1) **handler** : có thể có một hoặc nhiều function 
2) một **route** được xác định bằng Path (đường dẫn) và request method. 
3) Khái niệm **route** trùng khớp là chỉ việc một người dùng thực hiện request với Path (đường dẫn) và Method trùng khớp với định nghĩa trong **route**.

Ví dụ ra có một route như sau 

```javascript
app.get('/hello', function doHello(req, res) {
  res.send('Hello World!')
})
```

thì khi đó nếu sử dụng Curl tool để thực hiện một GET /hello đến máy chủ thì khi ấy route sẽ trùng khớp và function doHello sẽ được gọi thực hiện.

## 3.2 Route methods 

Express hỗ trợ rất nhiều loại HTTP methods khác nhau, bao gồm : 

get, post, put, head, delete, options, trace, copy, lock, mkcol, move, purge, unlock, report, mkactivity, checkout, merge, m-search, notify, subscribe, unsubscribe, patch and searc

Trong đó sử dụng nhiều nhất là:

Get, Post, Put, Head, Delete và Options ý nghĩa của từng method này mình đã nói đến trong bài học giao thức HTTP là gì.


## 3.3 Route paths (Đường dẫn)

Đây là phần trọng tâm của bài học hôm nay, route path có thể là một chuỗi thông thường (String) hoặc là một chuỗi string có tham số (string patterns) hoặc là một biểu thức chính quy (regular expressions). Ví dụ 

1) /users/nghuuquyen   : là một đường dẫn thông thường 
2) /users/user/*             : là một đường dẫn với tham số query strings là :user 
3) /^[a-zA-Z0-9]{5,15}$/ : là  một đường dẫn có dạng biểu thức chính quy kèm tham tham số.

```javascript
app.get('/users/nghuuquyen', function(req, res) {
  //Do something.
});
```

là một đường dẫn thông thường.

```javascript
app.get('/users/*', function(req, res) {
  // Do something.
});
```

là một đường dẫn theo khuôn mẫu (String pattern). Ký hiệu * ở đây nói lên là route trên khớp với mọi đường dẫn bắt đầu với /users/.

```javascript
app.get(/.*cool$/, function(req, res) {
  // Do something.
});
```

là một đường dẫn với dạng biểu thức chính quy (regular expression). Route này sẽ khớp với mọi đường dẫn kết thúc với đuôi là cool. Ví dụ YOUARESOcool sẽ khớp nhưng YOUTOOCool thì sẽ không vì khác ký tự 'C'.

 
**Ứng dụng**

Mình sẽ nêu một số ứng dụng với từng loại mà mình hay dùng trong quá trình lập trình. 

+ Kiểu string pattern mình hay áp dụng để việc đánh chặn tất cả các route, dùng trong việc bảo vệ một tập đường dẫn nào đó, ví dụ


```javascript
app.get('/secure/*', coreCtrl.requireLogin);
```
Ví dụ như với mọi đường dẫn bắt đầu bằng /secure/ thì phải yêu cầu login.

+ Biểu thức chính quy thì mình hay dùng để validate (hợp thức hóa) các đối số, ví dụ 

```javascript
router.route('/author/:author([a-zA-Z0-9.\-_]{8,30})').get(AuthorCtrl.renderAuthorPage);
```

Ở trên là một dạng đường dẫn với tham số :author được quy định có độ dài từ 8 đến 30 ký tự, bao gồm các chữ cái từ a-z, A-Z, 0-9 và 3 ký tự .,- và _. Nếu ở vi phạm thì route sẽ không khớp.


## 3.4 Route parameters

Route parameters là những vị trí trên URL được đánh dấu bằng cách đặt tên mục đích là để lấy ra các giá trị tương ứng. Tất cả cá giá trị đối số sẽ được đặt vào đối tượng **req** trong thuộc tính ***params**. Với tên thuộc tính trùng khớp với từ khóa được xác định trên URL.Ví dụ 

chúng ta định nghĩa một path là /users/:user . Thì ở đây :user chính là một route param. Khi đó nếu người dùng truy cập đường dẫn như là 

/users/nghuuquyen  --> ta lấy ra được :user = nghuuquyen 

và giá trị này sẽ nằm ở req.params.user 

```javscript
// Route path:     /users/:user/:view
// Request URL: http://127.0.0.1:3000/users/nghuuquyen/gallery
// req.params:    { "user": "nghuuquyen", "view": "gallery"}
app.route('/users/:user/:view', function(req, res) {
  console.log(req.params.user);
  console.log(req.params.view);
});
```


**Ứng dụng**

Route parameter dùng để biết được client muốn truy vấn cái gì thông qua đối số truyền vào. Dựa vào đó trong function handler tương ứng, chúng ta sẽ lấy các giá trị ra và thực hiện truy vấn phù hợp.

Ví dụ: 

Path: /user/:user 
Request: /user/nghuuquyen 

-> Trả về trang profile của người dùng có username là nghuuquyen.

 
**Kỹ thuật nâng cao**

Thường thì mình hay kết hợp rằng buộc biểu thức chính quy cho đối số để giảm bớt các lỗi truy vấn và tăng độ an toàn cho một route.

Ví dụ mình định nghĩa một route là /users/:user 

với đối số :user mong muốn là một username. Lúc này mình biết rõ là username của ứng dụng có độ dài từ 8 đến 30 kí tự chỉ bao gồm chữ cái tiếng anh hoa, thường , chữ số từ 0 đến 9 và ba ký tự đặc biệt là -, . và _.

Như vậy mình có thể áp dụng một biểu thức chính quy cho đối số này 

:user(^[A-Za-z0-9\.\-_]{8,30}+$) ==> Lúc này nếu bạn nhập vào một đường dẫn có đối số :user nhỏ hơn 8 hoặc lớn 30 ký tự thì route trên sẽ không nhận, hoặc chứa ký tự khác dấu ., _ và - , thì route cũng không nhận.
Từ đó hạn chế được việc query một username bị sau quy tắc và lại an toàn tránh tấn công SQL injection.


## 3.5 Route handlers

Đơn giản là một hoặc nhiều function sẽ được gọi khi một route trùng khớp để đáp ứng một yêu cầu nào đó. Lưu ý các handler sẽ được gọi đúng theo thứ tự truyền vào. Ví dụ 

app.get('/user', [a, b]); 

thì a sẽ gọi trước b. Chú ý là để b được gọi thì trong a phải gọi hàm next(). Ví dụ 


```javascript 
var cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}

var cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}

var cb2 = function (req, res) {
  res.send('Hello from C!')
}

app.get('/c', [cb0, cb1, cb2]);
``` 

**Ứng dụng**

Thường thì mình áp dụng kỹ thuật trên để tạo ra các polixy để bảo đảm thẩm quyền người dùng trên hành động nào đó, ví dụ mình nói là muốn xem thông tin thành viên thì phải đăng nhập trước. Khi đó mình có thể định nghĩa một route như sau. 


```javascript 
function isLogged(req, res, next) {
  if( Đã login ) {
    return next();
  } 
  
  return res.status(403).redirect('/login');
}

function renderProfilePage(req, res, next) {
  // Do render profile page...
}


app.get('/users/:user', [isLogged, renderProfilePage]);
``` 


Hoặc thực hiện việc logging thông tin các request để lưu trữ xem ai làm gì, ví dụ:


```javascript 
function isLogged(req, res, next) {
  if( Đã login ) {
    return next();
  } 
  
  return res.status(403).redirect('/login');
}

function renderProfilePage(req, res, next) {
  // Do render profile page...
}

function logRequest(req, res, next) {
   // Do logging IP, Header request
   next();
}

app.get('/users/:user', [isLogged, logRequest, renderProfilePage]);
``` 

Có một kỹ thuật khác nữa hay được áp dụng đó là kiểm tra tần suất gọi request của một địa chỉ IP nào đó để tránh các cuộc tấn công DDOS.

Và rất nhiều thứ khác có thể áp dụng thêm, các bạn có thể linh động nghĩ ra.


## 3.6 Response methods

Sau việc tiếp nhận và xử lý, thì việc tiếp theo đó là đáp ứng (Response). Trong express định nghĩa sẵn một số phương thức hỗ trợ cho bạn như là:

Tên phương thức | Ý nghĩa
-------------------|------------------------------------------
res.json()  |  Trả về một dữ liệu dạng JSON
res.redirect() | Chuyển hướng đến đường dẫn nào đó 
res.render()   | Trả về một view template
res.send()     | gửi dữ liệu dạng text

Ở trên là những phương thức hay dùng nhất.

### 3.7 app.route()

Đây là một cách định nghĩa route rõ ràng hơn, mới được hỗ trợ trong các phiên bản mới. Ví dụ thay vì bạn định nghĩa như sau.

```javascript 
function doGet(req, res, next) {
  // something ...
}

function doPost(req, res, next) {
  // something ...
}

function doPut(req, res, next) {
  // something ...
}

app.get('/users/:user', doGet);
app.post('/users/:user', doPost);
app.put('/users/:user', doPut);
``` 

thì áp dụng app.route chúng ta có thể làm ngắn gọn như sau 

```javascript 
function doGet(req, res, next) {
  // something ...
}

function doPost(req, res, next) {
  // something ...
}

function doPut(req, res, next) {
  // something ...
}

app.route('/users/:user')
.get(doGet)
.post(doPost)
.put(doPut);
``` 

mình rất thích dùng cách app.route vì nó gọn và dễ nhìn hơn rất nhiều.











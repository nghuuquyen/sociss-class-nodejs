# 1. Giới thiệu 

Bài học này chúng ta sẽ bắt tay vào xây dựng một website tĩnh với Node.js. Kiến thức trong mỗi bài học sẽ bắt đầu phức tạp dần.

# 2. Mục tiêu đạt được trong bài học 

1) Sử dụng được framework Express.js để khởi tạo và định tuyến đường dẫn cho website.
2) Khai báo và sử dụng được các tài nguyên tĩnh như là các tệp tin js, css và hình ảnh.
3) Hiểu được căn bản cấu trúc một website theo mô hình MVC.
4) Thực hành module hóa trong Node.js

# 3. Công cụ và kiến thức cần thiết 

### Công cụ 

1) Node JS và NPM 
2) Máy tính nối mạng Internet 
3) Text Editor như Atom, Sublime hoặc Visual Studio Code

### Kiến thức 

Nếu đây là lần đầu tiên bạn đến với Node.js thì bạn nên xem lại các bài học trước đó tại đây. Vì để bắt đầu phần này bạn cần có kiến thức nền trước.

 
# 4. Nội dung bài học

## 4.1 Giới thiệu và cài đặt framework Express.js 

### Express.js là gì ?

Express.js là một framework cung cấp cho chúng ta các tiện ích để định tuyến ( Routing ), xử lý các lớp trung gian (Middleware), Xử lý các yêu cầu và đáp ứng yêu cầu (HTTP Request và HTTP Resoponse) một cách dễ dàng hơn.

Qua bài học trước về cách xây dựng một HTTP server, thì các bạn đã hiểu được cách làm thế nào để có thể tạo một HTTP server, định tuyến và xử lý yêu cầu, đáp ứng yêu cầu. Thì giờ đây Express.js sẽ là một framework giúp bạn làm điều đó dễ dàng hơn. Tuy nhiên bản chất bên trong một framework làm gì thì nó vẫn bắt đầu từ những gì cơ bản nhất nhé.

### NPM là gì ?

NPM là một bộ công cụ quản lý thư viện của Node.js. Nó cho phép bạn có thể cài đặt và quản lý các thư viên , module một cách dễ dàng.

### Các cài đặt Express.js 

Tại thư mục chứa ứng dụng sau khi đã chạy lệnh `npm init` để khởi tạo project thì các bạn gõ lệnh sau

`npm install express --save`

Đối số `--save` là để tự động lưu vào tệp tin package.json

Sau khi cài đặt xong thì các bạn có thể cùng mình bắt tay vào thực hành bài học được rồi.

## 4.2 Khởi tạo cấu trúc thư mục của ứng dụng 

Đầu tiên từ thư mục gốc nơi các bạn khởi tạo ứng dụng, các bạn tao một cấu trúc thư mục như sau.

```markup 
.
├── controllers
│   ├── core.server.controller.js
│   └── index.js
├── README.md
├── routes
│   ├── core.server.routes.js
│   └── index.js
└── server.js
```

**Giải thích**

Thư mục **controllers** ở đây là để chứa các hàm xử lý tương ứng với mỗi route (path).
Thư mục **routes** là để chứa các file định tuyến cho cả ứng dụng.

Phong cách đặt tên file của mình là như trên, ví dụ `core.server.controller.js` thì nghĩa là mình hiểu đó là controller cho core module nằm ở phía server side. Đây là một best practice dành cho những ứng dụng có mã nguồn chứa cả khối client và server. Nó còn giúp bạn dễ dàng tìm kiếm file hơn.

mỗi thư mục đều có một file **index.js** đây là file chỉ mục của module, nó giúp exports tất cả các module con ra ngoài để dễ dàng require vào sử dụng.

## 4.1 Phần Controller

Trong bài học này controller đóng vai trò như là các handler tiếp nhận các yêu cầu thông qua router và giải quyết nó.

Mở file **core.server.controller.js** lên và gõ vào đó đoạn mã sau.

```javascript 
"user strict";

// Module public methods.
module.exports = {
  renderHomePage : renderHomePage,
  renderContactPage  : renderContact
};

/**
* @name renderHomePage
* @description
* Render homepage.
*
* @param  {object} req HTTP request
* @param  {object} res HTTP response
*/
function renderHomePage(req, res) {
  res.send('This is homepage');
}

/**
* @name renderContact
* @description
* Render contact page.
*
* @param  {object} req HTTP request
* @param  {object} res HTTP response
*/
function renderContact(req, res) {
  res.send('This is contact');
}
```

Trong file **src/controllers/index.js** thì bạn gõ vào đoạn mã sau 

```javascript
const coreCtrl = require('./core.server.controller');

module.exports = {
  Core : coreCtrl
};
```

Đơn giản là để export module core controller ra ngoài.


**Giải thích mã lệnh**

1) Thứ nhất bạn lưu ý req và res ở đây là Express HTTP request và Express HTTP response. Hai đối tượng này đã được Framework Express.js ghi đè lên đó một số phương thức nên cách sử dụng cũng khác với HTTP.IncommingMessage gốc của Node.js ở bài học trước.

2) Sau khi viết xong các function thì mình public nó ra bằng cách exports. Đây là một phong cách viết nên áp dụng vì nó rất rõ ràng để đọc. Chú ý khối exports được để ở đầu file, sẽ giúp người khác dễ đọc hơn, nắm bắt nhanh bên trong module có những function gì.


## 4.2 Phần Routing (Định tuyến)

Định tuyết là việc bạn chỉ định gắn một URL (Bao gồm path và method) đến một controller method cụ thể (Handle function)

mở file **core.server.routes.js** lên và gõ vào đoạn mã sau 

```javascript
/**
* @module routes
* @description
* Define all core routes of applications
*/
"user strict";

const coreCtrl = require('../controllers').Core;

module.exports = function(app) {
  app.route('/').get(coreCtrl.renderHomePage);
  app.route('/contact').get(coreCtrl.renderContactPage);
};
```

Trong file **src/routes/index.js** thì bạn gõ vào đoạn mã sau.

```javascript 
"user strict";

const coreRoutes = require('./core.server.routes');

module.exports = function(app) {
  coreRoutes(app);
};
```

Trong phần mã này, để ý **app** ở đây chính là **express HTTP server**. 


### 4.3 Phần Server 

Mở file **server.js** lên và gõ vào đoạn mã sau 

```javascript
"use strict";

const express = require('express');
const app = express();
const port = 3000;

// Do Registration routes.
require('./routes')(app);

app.listen(port, function(err) {
  if(err) {
    console.error('Something error !!');
    console.error(err);
  }

  console.log('App listen on port ' + port);
});
```


**Giải thích mã lệnh**

Ta thấy rằng thay vì như bài học trước ta tạo một HTTP server bằng lệnh 

```javascript
const http = require('http');
const server = http.createServer(requestHandler);
```

thì nay sẽ dùng Express để làm việc đó 

```javascript
const express = require('express');
const app = express();
```

thứ hai, với express.js để định tuyến một đường dẫn thì ta sẽ làm như sau 

```javascript 
const express = require('express');
const app = express();

app.route('/').get(function handler(req, res) {
  // Do somthing on request '/home' on 'GET' method
});
```

Như ví dụ trên, thì để code đẹp và gọn gàng hơn, ta tổ chức lại bằng cách truyền express http server **app** vào route module

```javascript 
// Do Registration routes.
require('./routes')(app);

............. /routes/index.js

module.exports = function(app) {
  coreRoutes(app);
};


...........,/routes/core.server.routes.js

module.exports = function(app) {
  app.route('/').get(coreCtrl.renderHomePage);
  app.route('/contact').get(coreCtrl.renderContactPage);
};

```

Cách viết trên là một best practice để chia nhỏ module, giúp quản lý code dễ dàng hơn.


### 4.4 Khởi chạy ứng dụng 

tại thư mục gốc của ứng dụng bạn chạy lệnh `node server` và nếu mọi thứ đều tốt bạn sẽ nhận được câu thông báo là 

App listen on port 3000


sau đó mở trình duyệt lên và chạy thử đường dẫn 127.0.0.1:3000 và 127.0.0.1:3000/contact để xem kết quả nhé.







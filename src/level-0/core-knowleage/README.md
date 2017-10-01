# Kiến thức nền

Ứng dụng Node JS được viết trên mã lệnh JavaScript. Những bạn trước đây đã làm việc quen với JavaScript trên trình duyệt thì sẽ thấy rất cấu trúc câu lệnh gần như tương đồng tuy nhiên chỉ khác nhau ở điểm đó là.

>Mã JavaScript trong Node JS là chạy ở phía Server Side nên sẽ không hỗ trợ các câu lệnh tưng tác với DOM hay những Browser Library để làm việc với trình duyệt thay vào đó,  Node JS sẽ hỗ trợ những thư viện để chúng ta có thể làm việc với tệp tin, hệ điều hành, v.v.

Trong bài viết này mình Quyền sẽ giới thiệu cho các bạn tổng quát kiến thức nền cần thiết khi làm việc với ngôn ngữ JavaScript bao gồm 3 phần trọng tâm là .


1. Cấu trúc câu lệnh.
2. Kiểu dữ liệu.
3. Thao tác trên các kiểu dữ liệu.


## 1. Cấu trúc câu lệnh JavaScript

### 1.1 Khối lệnh và dòng lệnh

Như các ngôn ngữ họ C khác như Java, .NET, v.v .JavaScript cũng tương tự, các khối mã lệnh được đặt trong cặp dấú ngoặc nhọn `{ code block }`. Kết thúc mỗi dòng lệnh sẽ là dấu chấm phẩy `;`.

Ví dụ về khối lệnh và dòng lệnh.

```javascript
function doSomethingCool() {
  // Đây là một khối lệnh trong cặp dấu ngoặc nhọn.
  // Dòng lệnh trong khối lệnh kết thúc bằng dấu chấm phẩy.
  console.log('Line 1');
  console.log('Line 2');
  console.log('Line 3');
}
```

### 1.2 Từ khóa
Trong JavaScript có bộ từ khóa là:

Từ khóa | Ý nghĩa
-------------------|------------------------------------------
break	| Thoát khỏi câu lệnh Switch hoặc vòng lặp
continue	| Nhảy ra khỏi vòng lặp hiện tại và quay trở lại đầu vòng lặp kế tiếp
debugger	| Dùng để đặt một break point khi debug
do ... while | Thực thi câu lệnh trong khối Do khi điều kiện trong While còn đúng
if ... else	| Khối lệnh điều kiện rẽ nhánh.
return	| Trả về giá trị và thoát khỏi một hàm.
switch | Đánh dấu một block gồm nhiều khối lệnh khác nhau sẽ được thực thi phụ thuộc vào từng trường hợp cụ thể của dữ liệu vào.
try ... catch	| Bắt và xử lý lỗi (Ngoại lệ)
var	| Định nghĩa biến.

Ví dụ một đoạn lệnh nhỏ.

```javascript
var a = 1;
var b = 2;

console.log(a + b); // 3
```

Câu lệnh trên khi thực thi sẽ in ra màn hình terminal giá trị là 3.

### 1.3 Comment (Viết bình luận hoặc mô tả cho mã lệnh)

Khi viết chương trình thì việc comment hay viết lời bình luận cho câu lệnh là không
thể thiếu. Cũng như các ngôn ngữ khác JS có hai kiểu comment là comment trên một dòng
hoặc comment trên nhiều dòng.

comment trên một dòng bắt đầu với //  
còn comment trên nhiều dòng bắt đầu với /* và kết thúc với * /

Ví dụ về viết document cho hàm Add thực hiện việc cộng hai số a và b.

```javascript
/**
* @name Add
* @description
* Add two given number {a} and {b} .
*
* @param  {number} a First number
* @param  {number} b Second number
* @constructor
*/
function Add(a, b) {
  // return sum of a and b.
  return a + b;
};
```

## 2. Biến và toán tử

Trong JS biến được khai báo với từ khóa `var`. Và có các kiểu dữ liệu là Object (đối tượng), String (Chuỗi), Number (Số ) hoặc Array (Mảng).

Ví dụ:

```javascript
var MAX = 1000;                                // Number

var name = "Nguyen Huu Quyen";                 // String

var user = {                                   // Object  
  name:"Nguyen Huu Quyen",
  username: "nghuuquyen"
};    

var array = ['Happy', 'Learning', 'Node JS'];  // Array
```

Tương ứng với mỗi kiểu dữ liệu sẽ có một số thao tác cơ bản.

### 2.1 Kiểu dữ liệu đối tượng ( Object )

#### 2.1.1 Khai báo

Trong JS mỗi đối tượng gồm có hai phần cơ bản đó là các thuộc tính (properties)
và các phương thức (methods) hay còn gọi là hành vi của đối tượng.

Ví dụ khai báo một object đơn giản.

```javascript
var product = {
  name : 'Product A',
  price : 500,
  fullInfo : function getFullInfo() {
    return 'Name: ' + this.name + ' Price: ' + this.price;
  }
};
```

Trong ví dụ trên ta thấy đối tượng `product` có 2 thuộc tính là `name` và `price`
trong đó thuộc tính `name` có giá trị (Property Value) là `Product A`.

Ngoài ra object `product` còn có một phương thức đó chính là `fullInfo` để trả
về thông tin đầy đủ của đối tượng là một chuỗi gồm tên và giá.

#### 2.1.2 Thiết lập và truy xuất dữ liệu (Get và Set Data)

Để thiết lập giá trị (Set) cho thuộc tính của đối tượng ta có hai cách như sau

```javascript
product.name = 'New Name';
product['name'] = 'New Name';
```
Việc lấy dữ liệu cũng đơn giản

```javascript
var _name = product.name;
```
Hoặc

```javascript
var _name = product['name'];
```

#### 2.1.3 Thực thi phương thức

Để thực thi phương thức của object các bạn làm như sau.

```javascript
var _fullInfo = product.fullInfo();
```


### 2.1 Kiểu dữ liệu chuỗi ( String )

#### 2.1.1 Khai báo

```javascript
var _string = 'This is string.';
// Nếu trong chuỗi có ký tự đặt biệt thì có thể dùng ký hiệu thoát \
var _message = 'It\'s 7 o\'clock.';
```

#### 2.1.2 Các thuộc tính và phương thức hay dùng trên chuỗi

1. Lấy độ dài chuỗi.

```javascript
var _string = 'THIS IS STRING';
_string.length // Get string length.
```

2. Viết thường hoặc viết hoa tất cả.

```javascript
var _string = 'THIS IS STRING';
var a = _string.toLowerCase(); // a = 'this is string'
var b = _string.toUpperCase(); // b = 'THIS IS STRING'
```

3. Cắt bỏ ký tự trống hai đầu.

Phương thức này được dùng thường xuyên để  xử lý chuỗi vào, tránh bị dư thừa ký
tự trống hai đầu.

```javascript
var _string = '         THIS IS STRING         ';
var a = _string.trim(); // a = 'THIS IS STRING'
```

### 2.2 Kiểu dữ liệu số ( Number )

#### 2.2.1 Khai báo

Khai báo một biến kiểu số.

```javascript
var _number = 150;
```

#### 2.2.2 Đối tương Math để thao tác trên số.
trong JS Math là một biến Global các bạn có thể dùng luôn mà không cần khai báo.

1. Làm tròn số.

Để làm tròn số thì trong JS có hỗ trợ 3 kiểu, làm tròn gần nhất (round), làm tròn
lên (ceil) và làm tròn xuống (floor).

Làm tròn gần nhất sẽ trả về giá trị nguyên gần nhất với giá trị hiện tại.

```javascript
Math.round(4.7);    // trả về 5
Math.round(4.4);    // trả về 4
```

Làm tròn lên và làm tròn xuống.

```javascript
Math.floor(4.7);    // trả về 4
Math.ceil(4.4);     // trả về 5
```

2. Tính trị tuyệt đối

```javascript
Math.abs(-5); // trả về 5
```
3. Tính sin và cos

hàm sin và cos nhận và giá trị radians, nếu bạn muốn dùng bằng giá trị độ, thì
đơn giản là nhân cho số PI rồi chia cho 180.

```javascript
Math.sin(90 * Math.PI / 180);     // trả về 1 (Sin góc 90 độ)
```

4. Tính giá trị mũ (x mũ y )

```javascript
Math.pow(8, 2);      // trả về 64 vì là 8 mũ 2
```

5. Tính giá trị căn bật hai

```javascript
Math.sqrt(64);      // trả về 8
```
6. Lấy giá trị ngẫu nhiên.
Hàm random() sẽ trả về ngẫu nhiên một giá trị trong khoảng từ 0 đến 1.
Ví dụ để lấy ngẫu nhiên một số trong khoảng từ 0 đến 1000 thì có thể làm như sau.

```javascript
Math.round( Math.random() * 1000 );
```

### 2.3 Kiểu dữ liệu mảng ( Array )

#### 2.2.1 Khai báo

Khai báo một biến kiểu mảng.

```javascript
var _numArray = [1, 2, 3, 4, 5]; // Khai báo một mảng số.
var _strArray = ['a', 'b', 'c']; // Khai báo một mảng ký tự.
var _oArray = [ // Khai báo một mảng đối tượng.
  {name : 'Product A', price : 500},
  {name : 'Product B', price : 600},
  {name : 'Product C', price : 700}
] ;
```

#### 2.2.2 các thuộc tính và phương thức thao tác với mảng.

1. Lấy độ dài mảng

```javascript
var array = [1,2,3];
array.length // 3
```
2. Thêm phần tử vào mảng

a. `push` thêm vào cuối.
```javascript
var array = [1,2,3];
array.push(4) // array = [1,2,3,4]
```

b. `unshift` thêm vào đầu mảng

```javascript
var array = [1,2,3,4,5];
array.unshift(0) // array = [0,1,2,3,4,5]
```

3. Đọc giá trị trên mảng.
```javascript
var array = [1,2,3];
array[1] // 2 , đọc tại vị trí 1, đếm từ 0.
```

4. Lấy phần tử trên mảng ra
Có 3 kiểu lấy phần tử ra đó là lấy đầu, lấy cuối và lấy ở vị trí `i`. Chú ý khi lấy
ra xong thì phần tử đó cũng xóa trong mảng gốc.

a. `pop` lấy cuối.  
```javascript
var array = [1,2,3,4,5];
array.pop() // 5, lấy phần từ ở cuối ra.
```

b. `shift` lấy đầu
```javascript
var array = [1,2,3,4,5];
array.shift() // 1, lấy phần từ ở cuối ra.
```

5. Cắt mảng (tạo một mảng con từ mảng gốc ban đầu)

hàm `slice` nhận vào hai tham số  bắt đầu và kết thúc. Chú ý nếu chỉ đưa vào một
tham số thì xem như là cắt từ vị trí đó đến cuối mảng.

Chú ý như ví dụ đây thì vị trí kết thúc sẽ không bao gồm trong mảng con nhé.

```javascript
var array = [1,2,3,4,5];
var sub = array.slice(1, 3); // cắt từ index 1 đến 3, sub = [2,3]
```

Ví dụ cắt từ vị trí số 3 đến tận cùng mảng.

```javascript
var array = [1,2,3,4,5];
array.slice(3) // [4,5]
```


### 2.3 Hàm ( Function )

Việc sử dụng hàm không còn xa lạ gì với kỹ thuật lập trình, trong JS việc khai
báo một hàm có thể thực hiện như sau.

#### 2.2.1 Khai báo

```javascript
function addTwoNumbers(a,b) {
  return a + b;
}
```
Trong đó `function` là từ khóa khai báo hàm. `addTwoNumbers` là tên hàm,
`(a,b)` là danh sách đối số. `return` là từ khóa trả về giá trị hàm đồng thời cũng thoát khỏi hàm đó.

#### 2.2.2 Gọi một hàm ra sử dụng.
Để gọi hàm chúng ta đơn giả sử dụng cặp dấu ngoặc tròn `()` kèm bên theo danh
sách đối số nếu có.

```javascript
function addTwoNumbers(a,b) {
  return a + b;
}

// Gọi hàm
addTwoNumbers(5,3) // trả về 8
```

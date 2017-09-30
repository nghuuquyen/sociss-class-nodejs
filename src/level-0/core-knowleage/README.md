# Kiến thức nền

Ứng dụng Node JS được viết trên mã lệnh JavaScript. Những bạn trước đây đã làm việc quen với JavaScript trên trình duyệt thì sẽ thấy rất cấu trúc câu lệnh gần như tương đồng tuy nhiên chỉ khác nhau ở điểm đó là.

>Mã JavaScript trong Node JS là chạy ở phía Server Side nên sẽ không hỗ trợ >các câu lệnh tưng tác với DOM hay những Broswer Library để làm việc với >trình duyệt thay vào đó,  Node JS sẽ hỗ trợ những thư viện để chúng ta có >thể làm việc với tệp tin, hệ điều hành, v.v.

Trong bài viết này mình Quyền sẽ giới thiệu cho các bạn tổng quát kiến thức nền cần thiết khi làm việc với ngôn ngữ JavaScript bao gồm 3 phần trọng tâm là .

1. Cấu trúc câu lệnh.
2. Kiểu dữ liệu.
3. Thao tác trên các kiểu dữ liệu.


## 1. Cấu trúc câu lệnh JavaScript

Như các ngôn ngữ họ C khác như Java, .NET, v.v .JavaScript cũng tương tự, các khối mã lệnh được đặt trong cặp dấú ngoặc nhọn `{ code block }`. Kết thúc mỗi dòng lệnh sẽ là dấu chấm phẩy `;`.


JS cũng có một bộ các từ khóa là:

Từ khóa | Ý nghĩa
------------|------------------------------------------
break	| Thoát khỏi câu lệnh Switch hoặc vòng lặp
continue	| Nhảy ra khỏi vòng lặp hiện tại và quay trở lại đầu vòng lặp kế tiếp

debugger	| Dùng để đặt một break point khi debug

do ... while | Thực thi câu lệnh trong khối Do khi điều kiện trong While còn đúng

if ... else	| Khối lệnh điều kiện rẽ nhánh.

return	| Trả về giá trị và thoát khỏi một hàm.

switch	Marks a block of statements to be executed, depending on different cases

Đánh dấu một block gồm nhiều khối lệnh khác nhau sẽ được thực thi phụ thuộc vào từng trường hợp cụ thể của dữ liệu vào.

try ... catch	| Bắt và xử lý lỗi (Ngoại lệ)
var	| Định nghĩa biến.

Ví dụ một đoạn lệnh nhỏ.

```javascript
var a = 1;
var b = 2;

console.log(a + b); // 3
```

Câu lệnh trên khi thực thi sẽ in ra màn hình terminal giá trị là 3.

---
title: 'GRPC'
date: '13/08/2022'
updatedDate: '23/08/2022'
summary: 'Giải ngố gRPC'
---

# gRPC là gì

gRPC là một framework để sử dụng RPC được phát triển và public bởi google. RPC là Remote Procedure Calls, là một cách liên lạc giữa client-server. Giống như protocol HTTP quen thuộc, một client (web) có thể sử dụng HTTP request tới một server để lấy dữ liệu. Thì với RPC, thay vì sử dụng một HTTP request, bạn có thể gọi đến server từ phía client bằng một câu lệnh như cùng viết trong một source code vậy. Một cách nói khác là gọi đến một function được cài đặt ở một server khác.

Ví dụ cho dễ hiểu:

- HTTP call: `axios.get('http://localhost:3000/hello)` # sử dụng axios để gọi đến server localhost:3000.
- RPC call: `client.sayHello` # sau khi setup client, có thể đến một function (ở đây là sayHello) ở server luôn.

# Tại sao lại sử dụng gRPC

# Xây dựng RESTful API trên nền gRPC

# Task Management System  

  

***Task Management System*** bir görev/yapılacak takip uygulamasıdır.  

  
  
![ilk](https://github.com/user-attachments/assets/b1f5bd02-7fac-44fd-8950-17de4aece3bc)

## Yükleme

Proje 2 farklı dosya ile çalışıyor bu yüzden ayrı ayrı yüklenişi var.

> **Not:** Eğer sizde VSCode kullanıyorsanız ***"CNTRL+J"*** kombinasyonu ile terminale ulaşabilirsiniz.

- Windows işletim sistemi için (Windows 10 ve sonrası sürümler için geçerli) ***"Windows+X"*** kombinasyonu ile aşağıdaki görseldeki seçimi yapalım.

![terminal](https://github.com/user-attachments/assets/719a3f89-5c70-420f-a355-a9356eac64b9)

Bu şekilde terminal sayfasına ulaşıyoruz.  

- Projenin olduğu dizine gelmemiz gerekiyor bunun için :

```bash
cd //Hangi dizine kayıtlıysa
```  

```bash
cd server
```
```bash
dotnet add package Microsoft.EntityFrameworkCore --version 7.0
```
```bash
dotnet add package Microsoft.EntityFrameworkCore.Sqlite --version 7.0
```

```bash
dotnet add package Microsoft.EntityFrameworkCore.Design --version 7.0  
```  

> **Not:** Bu noktada siz hangi sürümü kullanıyorsanız yukarıdaki version kısmına yazmanız gerekiyor.

- Yükleme işlemi gerçekleştikten sonra bir önceki dizine gelmemiz gerekiyor.

```bash
cd ..
```
```bash
cd client
```
- Bilgisayarınızda  Node kurulu olmalı ,kontrol etmek için aşağıdaki komutları terminal ekranına yazıp karşılığında aşağıdaki gibi bir görüntü elde etmelisiniz(Görüntüdeki sürüm eski olabilir).


![image](https://github.com/user-attachments/assets/93335927-4ac3-49da-bdae-d9567b7a8339)

```bash
node -v
```  

```bash
npm -v
```
- Terminal üzerinde doğru konumda olduğunuzdan emin olduktan aşağıdaki komutu çalıştırın.


```bash
npm install axios
```


## Kullanım


- Öncelikle aşağıdaki komut ile proje klasörüne geri gelelim.

```bash
cd ..
```  

> **Not:** Çalıştırma sırasının çok önemi yok dolayısıyla bu noktada çalıştırma sırası size kalmış.

 ```bash
cd server
```  

 ```bash
dotnet run  
```  
  
- Windows 10 ve sonrası bir sürüm kullanıyorsanız ek sekme açmak için aşağıdaki görseldeki butona tıklamalısınız.  

![image](https://github.com/user-attachments/assets/fcdade65-e1bc-4ab3-9848-01569ded7ed1)  
  
- Eğer windows 10 öncesi veya farklı bir terminal kullanıyorsanız lütfen önceki terminali **Kapatmadan** yeni bir terminal açın.  

- Yeni açdığınız terminalde proje dosya konumuna gelip aşağıdaki adımları izleyin.  

 
 ```bash
cd client
```   
 ```bash
npm run dev
```  
Bu şekide proje **ASP .Net** Back-end (Web API) olarak **React.JS**  Front-end (Client) olarak çalışmış oldu.  

- Herhangi bir tarayıcıya aşağıdaki linki kopyalayıp açabilir veya terminal üzerinden verilen (Son çalışan) local linkine tıklayarak da uygulamaya erişebilirsiniz.  

``` bash
http://localhost:5173/
```


- Görevinizin/Yapılacak işinizin başlığını **Title** kısmına yazınız.  

- Görevinizin/Yapılacak işinizin açıklamasını **Description** kısmına yazınız.  

- **Add Task** adlı butona tıklayınız,böylece aşağıda görüldüğü gibi bir görünüm elde etmiş olmalısınız.  
  
![new-verieklendi](https://github.com/user-attachments/assets/51dc58f4-67e4-4b31-bbe7-6d2326a2231c)  

- Silmek için önce **Mark Complete** butonuna tıklıyanız daha sonra **Delete** butonuna 2 kere tıklayınız.


Böylece yapmak istediklerinizi liste halinde görebilir, bitirdiğinizde ise silebilirsiniz.  


> **Not:** Olası hata durumlarında lütfen yükleme kısmını iyice okuyup tekrar ediniz.  


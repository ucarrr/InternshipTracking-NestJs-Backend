src
│
├── modules
│   ├── user
│   │   ├── dto         // Kullanıcı için Data Transfer Objects
│   │   ├── interfaces  // Kullanıcı için Interfaces
│   │   ├── schemas     // Kullanıcı için Mongoose Schemas
│   │   ├── services    // Kullanıcı için Business logic
│   │   ├── controllers // Kullanıcı için Request handlers
│   │   └── utils       // Kullanıcı için utility functions
│   │
│   └── faq
│       ├── dto         // Faq için Data Transfer Objects
│       ├── interfaces  // Faq için Interfaces
│       ├── schemas     // Faq için Mongoose Schemas
│       ├── services    // Faq için Business logic
│       ├── controllers // Faq için Request handlers
│       └── utils       // Faq için utility functions
│
├── common              // Ortak dosyalar
│   ├── constants       // Sabitler
│   └── utils           // Ortak yardımcı fonksiyonlar
│
├── app.module.ts       // Ana modül dosyası
└── main.ts             // Uygulama giriş noktası


# congig--> 
- npm i --save @nestjs/config
- env. global olarak ve farklı şekillerde yönetebilmemiz için nest config paketini kuruyoruz
# validator
- npm i --save class-validator class-transformer
- <s>class-validator:</s> Bu kütüphane, TypeScript sınıflarını doğrulamak için kullanılır. Sınıf alanlarına dekoratörler ekleyerek, bu alanların belirli koşullara uygun olup olmadığını kontrol edebilirsiniz. Örneğin, bir alanın boş olup olmadığını, belirli bir uzunlukta olup olmadığını, bir desenle eşleşip eşleşmediğini vb. kontrol edebilirsiniz. Bu kütüphane, form doğrulama, API girişlerinin doğrulanması gibi senaryolarda sıklıkla kullanılır.
- <s>class-transformer:</s> Bu kütüphane, TypeScript sınıflarını dönüştürmek için kullanılır. Özellikle, gelen isteklerin veya dış kaynaklardan alınan verilerin, uygulamanızın içinde kullanılacak nesnelere dönüştürülmesi gerektiği durumlarda kullanılır. Bu kütüphane, sınıflar arasında veri kopyalama, tür dönüşümü, sınıf yaratma vb. işlemleri kolaylaştırır.
# npm i bcrypt && npm i -D @types/bcrypt
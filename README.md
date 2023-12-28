# The Reducer Pattern Modül Projesi: Hesap Makinası

Bu hafta reducer yaklaşımını incelediniz. Bu projede bugün öğrendiklerimizi pekiştireceğiz.

## Giriş

- Bu projede, sayıları herhangi bir sırayla toplayabilen, çarpabilen, çıkarabilen ve çıkartabilen, ayrıca hafızaya kaydetme ve callback özellikleri ekleyebilen basit bir hesap makinesi uygulaması oluşturacaksınız.
- Koda eksik parçaları ekleyerek başlayacak ve UI, reducer ve event dosyalarında sıfırdan özellikler oluşturarak projeyi tamamlayacaksınız.
- **Bu hesap makinesi bildiklerimizden biraz farklı. Her yeni hesaplamasında önceki hesabın sonucunu ve yeni bir sayıyı parametre olarak alıyor.** İşlem sonunda hesap makineniz aşağıdaki gibi çalışmalıdır:

![Hesap Makinası Örnek](proje-hedefi.gif)

**_Görevlerinizi tek tek tamamladığınızdan ve ilerlemeden önce her bir görevi test ettiğinizden emin olun.._**

## Talimatlar

### Görev 1: Proje Kurulumu

- [ ] Forklayın
- [ ] Klonlayın
- [ ] Ana dizine gidin
- [ ] `npm install`
- [ ] `npm start`

### Görev 2: Proje Gereksinimleri

#### Reducer'ı bağlayın

> _Kullanıcı arayüzümüzü reducera ve ilk state'e bağlayarak sürecimize başlayalım.._

- [x] Uygulama klasöründe gezinin, özellikle "App.js", "/reducer/index.js" ve "/actions/index.js" dosyaları.
- [x] `TotalDisplay` bileşeni bir değer alır ve bu değeri stillenmiş bir textarea'da gösterir. BU BİLEŞENİ DEĞİŞTİRMENİZE GEREK YOK.
- [x] `CalcButton` bileşeni bir `onClick` metodu ve bir değer alır, bu değeri görüntüler ve `onClick` metodunu ui butonuna ekler. BU BİLEŞENİ DEĞİŞTİRMENİZE GEREK YOK.
- [x] App.js içine, useReducer hookunu import edin, uygulamamızın reducer'ı ve initialState nesnesi buradan gelecek.
- [x] Uygulama state'ine ve dispatch fonksiyonuna erişmek için useReducer hookunu kullanın.

#### State'i UI'de görüntülemek.

> _Artık App bileşenimizde state'e erişimimiz var (Bunu console.log ya da React dev tools'dan gözlemleyebilirsiniz). State'i örnek ekranımızdaki gibi render edelim._

- [x] Operation elemanı içindeki "X" i `state.operation` ı referans alarak değiştirin.
- [x] Memory elemanı içindeki "0" ı `state.memory` yi referans alarak değiştirin.
- [x] TotalDisplay bileşenine değer atarken "0" ı `state.total` ı referans alarak değiştirin.
- [x] UI'de initialState'teki değerlerle total, operation ve memory'yi kontrol edin (100, \* ve sırasıyla 100)
- [x] Reducer'daki initialState değerini değiştirerek elde ettiğiniz state'i test edin:

```
export const initialState = {
  total: 0,
  operation: "+",
  memory: 0
}
```

- [x] Ekranınızın state'teki değişikliği doğru bir şekilde yansıttığını kontrol edin.

#### Hazır action'ı bağlama.

> _Artık State'imizi görebildiğimize göre, kullanıcının bunu değiştirebilmesine izin verelim. Hazır bir action ile başlayalım... Total'ı bir artıralım._

- [x] `ADD_ONE` action'ına (./reducer/index.js içindeki) ve `addOne` action oluşturucuya (./actions/index.js içindeki) göz atın. Bu action total'a 1 ekler.
- [x] `addOne` action oluşturucuyu App.js içine import edin.
- [x] `App.js` içinde bir event handler oluşturarak, 1 butonunun `onClick` metoduna ekleyin.
- [x] Event handler içinde, `addOne` action oluşturucuyu dispatch edin.
- [x] Eventinizin doğru çalışıp çalışmadığını tarayıcınızda 1 butonuna basarak test edin. Total'iniz 1 artmalı.
- [x] Bir butona tıklandığında güncellenen totali nasıl gösterebileceğimizi düşünün. Hangi adımlar vardı? `soruyu-anlamak.md` dosyası içine, kendi cümlelerinizle tüm adımları yazın.

#### Daha iyi bir hazır action bağlayın.

> _Her sayı için ayrı action eklemek sıkıcı olabilir. TÜM sayısal girdiler için çalışabilecek bir action ekleyelim_

- [x] `APPLY_NUMBER` action'a (./reducer/index.js içindeki) ve `applyNumber` action oluşturucuya (./actions/index.js içindeki) göz atalım. Bu action, action oluşturucuya iletilen bir sayıyı ekler, çarpar veya çıkarır.
- [x] `applyNumber` action oluşturucusunu `App.js.` içine import edin
- [x] Daha önce 1 butonuna eklediğimiz event handlerı silin ya da comment içerisine alın.
- [x] Argüman olarak bir sayı alan ve `applyNumber` ı dispatch eden bir event handler oluşturun.
- [x] Bu eventhandlerı, argümanına 1 vererek 1 butonunun onClick metod'una bağlayın. (Şunu unutmayın onClick metoduna bir fonksiyon aktarıyoruz, var olan bir fonksiyonu direk çalıştırmıyoruz(too many re-renders hatası alırız))
- [x] 1 butonuna basıldığında totali 1 artırıp ekrana yazdırıp yazdırmadığını test edin.
- [x] Yeni event handlerınızı gerekli değerleri vererek tek tek diğer butonlara da bağlayın.
- [x] Tüm butonlara tek tek tıklandığında totale doğru değerleri ekleyip eklemediğini test edin.

#### Bir action oluşturucu oluşturun ve bağlayın.

> _Şu anda uygulamamız sadece toplama işlemi yapıyor. Şimdi bunu değiştireceğiz. Kendi action oluşturucunuzu yaratmanın vakti geldi!_

- [x] `CHANGE_OPERATION` action'a (`./reducer/index.js` içinde) göz atın. Bu reducer operatör değeri alır (+,- ve \*) ve bunu state'e aktarır.
- [x] Argümanı olarak bir operatör alan bir action oluşturucu oluşturun (`./actions/index.js` içinde) ve type'ı `CHANGE_OPERATION.` olan action nesnesi oluştursun.
- [x] Yeni action oluşturucuyu `App.js` ye import edin.
- [x] `+`, `-` ve `*` butonlarına tıklandığında, ilgili operatörü action oluşturucunuza ekleyen bir event handler oluşturun. Her buton için doğru operatörü gönderdiğinizden emin olun.
- [x] Operatör butonlarının doğru şekilde çalıştığından ve sayıları doğru işleme(toplama, çıkarma v.b.) tabi tuttuğundan emin olmak için test yapın.

#### Bir reducer ve action oluşturucu oluşturun ve bağlayın.

> _Şimdi ekran görüntüleyiciyi sıfırlama özelliği ekleyeceğiz. Bunun için reducer ve action oluşturucunun tamamını kendiniz yapacaksınız._

- [x] `./reducers/index,` içinde, `CLEAR_DISPLAY` case'i oluşturun. Bu case total değer statini 0 yapacak.
- [x] `./actions/index,` içinde, action oluşturucuyu ve adı `CLEAR_DISPLAY` olan bir action constant'ını string değeri ile ekleyin. Reducer dosyanızda da bu sabit değeri import ettiğinizden emin olun.
- [x] `App.js,` içinde clearDisplay action oluşturucuyu import edin.
- [x] clearDisplay action oluşturucunuzu dispatch eden bir event handler yazın ve "CE" butonuna bağlayın.
- [x] clearDisplay butonunuzun düzgün çalışıp çalışmadığını test edin.

#### Esnek olarak Memory fonksiyonları ekleyin.

> _Tebrikler! Tüm işlemler için actionler ekleme görevini başarıyla tamamladınız! Şimdi aynı işlemleri takip ederek yeni özellikler ekleyeceksiniz. Tüm caseler için bir sonraki case e geçmeden önce testlerini yapmayı unutmayın._

- [x] `M+` a tıklandığında, şu anki memory değerine şu anki total değerini kaydetsin. UI'de test edin.
- [x] `MR` a tıklandığında, şu an memorydeki değer şu anki total değerine aktarsın (APPLY_NUMBER case ine göz atın). UI'de test edin.
- [x] `MC` e tıklandığında, şu anki memory değeri sıfırlasın. UI'de test edin.

### Görev 3: Esnek görevler

- [ ] Hesap makinesinin rakamlar ekleme yerine tek tek rakamları toplamaya odaklanan bir sürümü vardır. Total stateine bağımsız bir rakam eklemeyi nasıl düşünürsünüz?
- [ ] [Şurada bir örnek var](https://freshman.tech/calculator/) reducer olmayan bir javascript hesap makinası uygulaması. Yeni bir branch oluşturup hesap makinasının yeni versiyonunu buraya yükleyin.

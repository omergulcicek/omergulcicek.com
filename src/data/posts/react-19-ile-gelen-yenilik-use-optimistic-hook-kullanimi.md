---
date: "2025-01-06"
path: "/react-19-ile-gelen-yenilik-use-optimistic-hook-kullanimi"
title: "React 19 ile Gelen Yenilik: useOptimistic Hook Kullanımı"
category: "Teknik"
keywords: ["React"]
medium: "https://omergulcicek.medium.com/react-19-ile-gelen-yenilik-useoptimistic-hook-kullan%C4%B1m%C4%B1-eebe5cb6a732"
---

![React useOptimistic](/img/blog/2025-01-06/useOptimistic.png)

React 19 ile hayatımıza birçok yeni kolaylık girdi. Bunlardan biri olan `useOptimistic` hook'u, uygulamalarımızda optimistic rendering yapmamıza olanak tanır.

`useOptimistic` sayesinde, bir kullanıcı işlem gerçekleştirdiğinde, işlem tamamlanana kadar kullanıcıya **işlemin tamamlandığı varsayımıyla** bir geri bildirim gösterilebilir. Bu yaklaşım, kullanıcılara daha akıcı ve tatmin edici bir deneyim sunar.

Ben optimistic UI’ı özetle "mış gibi" olarak adlandırıyorum, yani bir şey gerçekleşmeden önce, olmuş gibi davranmak. Örneğin, bir kullanıcı bir tweet’i beğendiğinde, normalde backend’e bir istek gönderilir ve başarı yanıtı alındıktan sonra kullanıcıya bu işlem gösterilir. Optimistic UI yaklaşımı ise API’den yanıt gelmeden, işlemin başarılı olduğunu varsayarak kullanıcıya sonucu hemen gösterir. Bu sayede kullanıcı, sitenin hızlı çalıştığına inanır. Bu sırada, işlem backend’de gerçekleştirilir. Eğer beğenme işlemi başarısız olursa, sistem durumu eski haline döndürür.

Aşağıdaki örneği inceleyelim. Bir butona tıklandığında sağdaki optimistic UI ile geliştirilmiş kod, backend’den yanıt gelmesini beklemeden sayıyı artırır. Soldaki normal kullanım ise backend’den yanıtın gelmesini bekler.

![React useOptimistic hook](/img/blog/2025-01-06/optimistic-ui.gif)
## Kullanımı

Öncelikle klasik React hook'ları gibi bir hook tanımlıyoruz.

```javascript
const [optimisticState, applyOptimisticUpdate] = useOptimistic(initialState, updaterFunction);
```

- **initialState**: Optimistic state'in başlangıç değeri
- **updaterFunction**: Optimistic state'i güncelleyen fonksiyon

Örnek bir kullanım:

```javascript
import { useState } from 'react';
import { useOptimistic } from 'react';
import { fakeApiToAddTodo } from '@/api';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [optimisticTodos, addOptimisticTodo] =
	useOptimistic(todos,(todos, newTodo) => [...todos, newTodo]);

const handleAddTodo = async (newTodo) => {
	/* Parametre olarak gelen yeni değeri backend'e göndermeden önce
	optimistic state'e ekleyelim */
	addOptimisticTodo(newTodo);

	/* Bu aşamada UI'da kullanıcı bu işlemin tamamlandığını görecek
	fakat henüz API isteği başlatılmadı bile */

	try {
		// Yeni todo'yu backend'e gönderiyouz
		await fakeApiToAddTodo(newTodo);
	} catch (error) {
		// API isteği başarısız olursa, optimistic ui işlemini geri alıyoruz
		setTodos((prevTodos) => prevTodos.filter((todo) => todo !== newTodo));
	}
};

  return (
    <div>
      <ul>
        {optimisticTodos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <button onClick={() => handleAddTodo(`New Todo ${Date.now()}`)}>Add Todo</button>
    </div>
  );
}

export default TodoList;
```

Kodu satır satır yorumlarla açıkladım. Görüldüğü gibi, `addOptimisticTodo` fonksiyonu sayesinde optimistic state’i güncelliyoruz. Bu işlem, backend’e istek yapılmadan önce gerçekleşiyor. Eğer backend’den yanıt başarısız olursa, optimistic state’i geri alıyoruz.

Bu hook, kullanıcıya daha akıcı ve hızlı bir deneyim sunmak için oldukça kullanışlıdır. Ancak, her zaman kullanmak doğru bir yaklaşım olmayabilir.

Örneğin, bir ödeme işlemi sırasında optimistic UI kullanmak, kullanıcıya yanlış bilgi verebilir. Kullanıcı *"Ödemeniz başarılı"* mesajını gördüğünde, işlem aslında başarısız olduysa bu durum kafa karışıklığına ve kullanıcı memnuniyetsizliğine yol açabilir.

Bu nedenle, optimistic UI’ı kullanırken dikkatli olmalısınız. İşlem başarısız olduğunda kullanıcıya bu durumu açık bir şekilde gösterebilmek için uygun geri dönüş mekanizmalarını tasarlamak oldukça önemlidir.

***

*Yazının kapak görseli yapay zeka tarafından üretilmiştir. 🤖*

### Kaynaklar

- <a href="https://react.dev/blog/2024/12/05/react-19#whats-new-in-react-19" target="_blank" rel="noreferrer noopener">React v19 Blog</a>
- <a href="https://medium.com/zestgeek/mastering-reacts-useoptimistic-hook-a-comprehensive-guide-with-examples-75b4637fe760" target="_blank" rel="noreferrer noopener">Love Trivedi - Mastering React’s useOptimistic Hook</a>

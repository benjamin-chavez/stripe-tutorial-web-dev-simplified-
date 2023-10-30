// server/public/script.js

const button = document.querySelector('button');
button.addEventListener('click', () => {
  fetch('http://localhost:3000/create-checkout-session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      items: [
        { id: 1, quantity: 3 },
        { id: 2, quantity: 4 },
      ],
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
    })
    .then(({ url }) => {
      window.location = url;
      console.log(url);
    })
    .catch((e) => {
      console.log(e.error);
    });
});

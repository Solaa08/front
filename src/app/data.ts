'use server'

export async function getGames() {
    const response = await fetch(`http://localhost/next-formation/back/`, {
      method: 'GET',
    });
    const result = await response.json();
    return result;
  }

//   export async function getGameById() {
//     const response = await fetch(`http://localhost/next-formation/back/${id}`, {
//       method: 'GET',
//     });
//     const result = await response.json();
//     return result;
//   }

//   export async function createGame(formData: any) {
//     const name = formData.get('name');
//     const desc = formData.get('descrip');
//     const etat = formData.get('etat');
//     const response = await fetch(`http://localhost/next-formation/back}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ name, desc, etat }),
//     });
//     const result = await response.json();
//     return result;
//   }
1.	Introducere: 
Aplicația dezvoltată are ca scop principal gestionarea eficientă a unei baze de date care conține informații detaliate despre persoane. Aceste date includ prenumele, numele de familie, vârsta, hobby-ul, mediu demografic, profesia și venitul lunar. Utilizând MongoDB, o bază de date non-relațională, împreună cu serviciile de hosting oferite de Vercel, aplicația permite o manipulare rapidă și eficientă a datelor într-un mediu Cloud optimizat pentru aplicații frontend. Scopul este de a oferi o interfață ușor de utilizat, accesibilă global, cu posibilități extinse de interogare și raportare a datelor. Aplicația folosește două produse de tip Cloud: baza de date non-relațională, MongoDB și hostarea proiectului se face în Vercel.

2.  Descriere problemă: 
Problema centrală pe care o abordează aplicația este necesitatea de a avea acces rapid și sigur la informații complexe și variate despre un număr mare de persoane, aproape 400, fără compromisuri în ceea ce privește securitatea și performanța. În contextul creșterii continue a volumului de date și a diversității informațiilor, este esențial să se asigure o organizare eficientă care să permită utilizatorilor să acceseze, să actualizeze și să analizeze datele într-un mod cât mai simplu și intuitiv posibil.

3. Descriere API:
API-ul aplicatiei este structurat pentru a oferi acces la operațiunile CRUD (Create, Read, Update, Delete) asupra datelor stocate în baza de date MongoDB. Aplicația folosește framework-ul Next.js și serverul implicit acestuia pentru a gestiona rutele și datele.
Endpoint-uri:
GET /records - returnează o listă cu toate persoanele din baza de date.
POST /records - adaugă o nouă persoană în baza de date.
GET /records/{id} - returnează detalii despre o anumită persoană.
PUT /records/{id} - actualizează datele unei persoane.
DELETE /records/{id} - șterge o persoană din baza de date.

4. Flux de date:
Fluxul de date în aplicație începe cu interogarea API-ului de către clientul frontend, care este găzduit pe Vercel. Utilizatorii trimit cereri HTTP către serverul backend care rulează pe Next.js, procesând și răspunzând la aceste cereri prin intermediul MongoDB.

Exemple de request / response:
Request: GET /records
Response:
[
  {
    "FirstName": "Edithe",
    "LastName": "Leggis",
    "Age": 27,
    "Interests": "Sports",
    "Demographic": "Urban",
    "Profession": "Nurse",
    "Income": "19,774"
  }
]

Metode HTTP:
GET - pentru a obține date.
POST - pentru a adăuga date noi.
PUT - pentru a actualiza datele existente.
DELETE - pentru a șterge datele.

5. Capturi ecran aplicație:
  Interfața aplicației cu toate datele introduse în baza de date:
![image](https://github.com/FlaviaLaura27/Proiect_Cloud_Computing/assets/102656992/1c176707-d6d7-4c06-9217-fcc216ae4cd5)

  Formularul de crearea a unei noi instanțe în baza de date:  
  ![image](https://github.com/FlaviaLaura27/Proiect_Cloud_Computing/assets/102656992/f79c9e7d-fdf0-4255-9979-b364f81a8924)

6. Referințe:
[ Advantages Of Cloud Computing  |  Google Cloud](https://cloud.google.com/learn/advantages-of-cloud-computing)

[Top 10 Benefits of Cloud Computing (oracle.com)](https://www.oracle.com/cloud/what-is-cloud-computing/top-10-benefits-cloud-computing/)

[What is a REST API? | IBM](https://www.ibm.com/topics/rest-apis)

[HTTP Messages - HTTP | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages)

[Behind the scenes of Vercel's infrastructure: Achieving optimal scalability and performance – Vercel](https://vercel.com/blog/behind-the-scenes-of-vercels-infrastructure)

[ Why Use MongoDB And When To Use It? | MongoDB](https://www.mongodb.com/resources/products/fundamentals/why-use-mongodb)


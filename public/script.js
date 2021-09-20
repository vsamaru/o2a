// Initialize Firebase
// TODO: Replace with your project's customized code snippet
const config = { "apiKey":"AIzaSyB274QGQF2McYAlFKGn5I1cQAtgoQlQiRM",
   "authDomain":"iiilll.firebaseapp.com",
   "databaseURL":"https://iiilll.firebaseio.com",
   "projectId":"iiilll",
   "storageBucket":"iiilll.appspot.com",
   "messagingSenderId":"475667452813",
   "appId":"1:475667452813:web:45609f286dc8fb020823c4",
   "measurementId":"G-TMCP3CQKNF"
}
/* end replace */
firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
};
db.settings(settings);

const form = document.querySelector("form");
const nickname = document.getElementById("nickname");
const message = document.getElementById("message");
const errorMessage = document.querySelector(".error-message");
const closebtn = document.querySelector(".error-message .close");
const dataArea = document.getElementById("load-data");

form.addEventListener("submit", e => {
  e.preventDefault();

  if (nickname.value !== "" && message.value !== "") {
    db
      .collection("X")
      .add({
        nickname: nickname.value,
        message: message.value,
        date: new Date()
      })
      .then(docRef => {
        console.log("Document written with ID: ", docRef.id);
        // window.location.reload();
      })
      .catch(error => {
        console.error("Error adding document: ", error);
      });
    errorMessage.classList.remove("show");
    nickname.value = "";
    message.value = "";
  } else {
    errorMessage.classList.add("show");
  }
});

closebtn.addEventListener("click", () => {
  errorMessage.classList.remove("show");
});

// A function for formatting a date to DD Month YY - HH:mm
formatDate = d => {
  // Months array to get the month in string format
  const months = new Array(
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  );
  // get the month
  const month = d.getMonth();
  // get the day
  const day = d.getDate();
  // get the year
  let year = d.getFullYear();
  // pull the last two digits of the year
  year = year.toString().substr(-2);
  // get the hours
  const hours = d.getHours();
  // get the minutes
  const minutes = ("0" + d.getMinutes()).slice(-2);
  //return the string "DD Month YY - HH:mm"
  return (
    day + " " + months[month] + " '" + year + " - " + hours + ":" + minutes
  );
};

db
  .collection("A")
  .orderBy("date")
  .onSnapshot(querySnapshot => {
    let messages = [];
    querySnapshot.forEach(chat => {
      messages.push(chat.data());
    });

    if (messages.length !== 0) {
      dataArea.innerHTML = "";
    } else {
      dataArea.innerHTML = "<p>No messages</p>";
    }

    for (let i = 0; i < messages.length; i++) {
      const createdOn = new Date(messages[i].date * 1000);
      dataArea.innerHTML += `

                <img src= ${messages[i].th} alt="Hosted repo">
                  <p>${messages[i].pic}</p>
                </div>
                <div class="float-right">
                  <span class="green-sheen p-05 small">
                    ${messages[i].from}
                    ${messages[i].imgid}
                    ${messages[i].ll}
                  </span>
                  <span class="cambridge-blue p-05 small">
                    ${formatDate(createdOn)}
                  </span>
                </div>
              </article>
            `;
    }
  });

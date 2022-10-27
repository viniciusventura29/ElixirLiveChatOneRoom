let Chat = {
  init(socket) {
    let path = window.location.pathname.split("/");
    let room = path[path.length - 1];
    let channel = socket.channel("chat:" + room, {});
    channel.join()
    .receive("ok", (resp) => {
      console.log("Joined succesfully", resp);
    });
  },

  listenForChats(channel) {
    function submitForm() {
      let userName = document.getElementById("user-name").value;
      let userMsg = document.getElementById("user-msg").value;

      channel.push("sout", { name: userName, body: userMsg });

      document.getElementById("user-name").value = userName;
      document.getElementById("user-msg").value = "";
    }

    channel.on('shout',payload => {
        let chatBox = document.querySelector("#chat-box")
        let msgBlock = document.createElement("p")

        msgBlock.insertAdjacentHTML("beforeend", `<b>${payload.name}:</b> ${payload.body}`)
        chatBox.appendChild(msgBlock)
    })

    document
      .getElementById("chat-form")
      .addEventListener("submit", function (e) {
        e.preventDefault();
        submitForm();
      });
  },
};

export default Chat;

 let tasks = [];

      function addTask() {
        const dayOfWeek = document.getElementById("dayOfWeek").value;
        const time = document.getElementById("time").value;
        const importance = document.getElementById("importance").value;
        const subject = document.getElementById("subject").value;
        if (subject === "") {
          alert("вы не ввели предмет!");
        } else {
          tasks.push({
            dayOfWeek: dayOfWeek,
            time: time,
            importance: importance,
            subject: subject
          });
          document.getElementById("subject").value = "";
        }
      }

      function showList() {
        const list = document.getElementById("list");
        list.innerHTML = "";
        for (let i = 0; i < tasks.length; i++) {
          const task = tasks[i];
          const listItem = document.createElement("li");
          const taskInfo = `${task.dayOfWeek}, ${task.time}, ${task.importance}, ${task.subject}`;
          listItem.appendChild(document.createTextNode(taskInfo));
          list.appendChild(listItem);
        }
      }
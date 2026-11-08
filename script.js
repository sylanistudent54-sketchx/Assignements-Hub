const assignments = [

    // HTML ASSIGNMENTS

    {
        title: 'HTML-Task-1',
        subject: 'HTML',
        github: 'https://github.com/sylanistudent54-sketchx/All-Assignements/tree/main/Assignements',
        live: 'https://html-task-1-ten.vercel.app/',
        drive: 'https://drive.google.com/drive/folders/1G1Sdr6yLakpk1y3dvuNog5saeLSn9msj?usp=sharing'
    },

    {
        title: 'HTML-Task-2',
        subject: 'HTML',
        github: 'https://github.com/sylanistudent54-sketchx/All-Assignements/tree/main/Assignements',
        live: 'https://html-task-2-three.vercel.app/',
        drive: 'https://drive.google.com/drive/folders/1G1Sdr6yLakpk1y3dvuNog5saeLSn9msj?usp=sharing'
    },

    {
        title: 'HTML-Task-3',
        subject: 'HTML',
        github: 'https://github.com/sylanistudent54-sketchx/All-Assignements/tree/main/Assignements',
        live: 'https://html-task-03-ten.vercel.app/',
        drive: 'https://drive.google.com/drive/folders/1G1Sdr6yLakpk1y3dvuNog5saeLSn9msj?usp=sharing'
    },

    {
        title: 'HTML-Task-4',
        subject: 'HTML',
        github: 'https://github.com/sylanistudent54-sketchx/All-Assignements/tree/main/Assignements',
        live: 'https://html-task-4-ashy.vercel.app/',
        drive: 'https://drive.google.com/drive/folders/1G1Sdr6yLakpk1y3dvuNog5saeLSn9msj?usp=sharing'
    },

    {
        title: 'HTML-Task-5',
        subject: 'HTML',
        github: 'https://github.com/sylanistudent54-sketchx/All-Assignements/tree/main/Assignements',
        live: 'https://html-task-5-xi.vercel.app',
        drive: 'https://drive.google.com/drive/folders/1G1Sdr6yLakpk1y3dvuNog5saeLSn9msj?usp=sharing'
    },

    {
        title: 'HTML-Task-6',
        subject: 'HTML',
        github: 'https://github.com/sylanistudent54-sketchx/All-Assignements/tree/main/Assignements',
        live: 'https://html-task-6-rosy.vercel.app',
        drive: 'https://drive.google.com/drive/folders/1G1Sdr6yLakpk1y3dvuNog5saeLSn9msj?usp=sharing'
    },

    {
        title: 'HTML-Task-7-Last-Task',
        subject: 'HTML',
        github: 'https://github.com/sylanistudent54-sketchx/All-Assignements/tree/main/Assignements',
        live: 'https://html-task-7-last-task.vercel.app',
        drive: 'https://drive.google.com/drive/folders/1G1Sdr6yLakpk1y3dvuNog5saeLSn9msj?usp=sharing'
    },


    // CSS ASSIGNMENTS

    {
        title: 'CSS-Task-1-Page-1',
        subject: 'CSS',
        github: 'https://github.com/sylanistudent54-sketchx/All-Assignements/tree/main/Assignements',
        live: 'https://css-task-1-page-1.vercel.app',
        drive: 'https://drive.google.com/drive/folders/1G1Sdr6yLakpk1y3dvuNog5saeLSn9msj?usp=sharing'
    },

    {
        title: 'CSS-Task-1-Page-2',
        subject: 'CSS',
        github: 'https://github.com/sylanistudent54-sketchx/All-Assignements/tree/main/Assignements',
        live: 'https://css-task-1-page-2.vercel.app',
        drive: 'https://drive.google.com/drive/folders/1G1Sdr6yLakpk1y3dvuNog5saeLSn9msj?usp=sharing'
    },

    {
        title: 'CSS-Task-2',
        subject: 'CSS',
        github: 'https://github.com/sylanistudent54-sketchx/All-Assignements/tree/main/Assignements',
        live: 'https://css-task-2-zeta.vercel.app',
        drive: 'https://drive.google.com/drive/folders/1G1Sdr6yLakpk1y3dvuNog5saeLSn9msj?usp=sharing'
    },

    {
        title: 'CSS-Task-3',
        subject: 'CSS',
        github: 'https://github.com/sylanistudent54-sketchx/All-Assignements/tree/main/Assignements',
        live: 'https://css-task-3-ten.vercel.app',
        drive: 'https://drive.google.com/drive/folders/1G1Sdr6yLakpk1y3dvuNog5saeLSn9msj?usp=sharing'
    },

    {
        title: 'CSS-Task-4',
        subject: 'CSS',
        github: 'https://github.com/sylanistudent54-sketchx/All-Assignements',
        live: 'https://csstask3-three.vercel.app',
        drive: 'https://drive.google.com/drive/folders/1G1Sdr6yLakpk1y3dvuNog5saeLSn9msj?usp=sharing'
    },

    {
        title: 'CSS-Task-5',
        subject: 'CSS',
        github: 'https://github.com/sylanistudent54-sketchx/All-Assignements',
        live: 'https://csstask5-phi.vercel.app',
        drive: 'https://drive.google.com/drive/folders/1G1Sdr6yLakpk1y3dvuNog5saeLSn9msj?usp=sharing'
    },

    {
        title: 'CSS-Task-6',
        subject: 'CSS',
        github: 'https://github.com/sylanistudent54-sketchx/All-Assignements',
        live: 'https://csstask6-three.vercel.app',
        drive: 'https://drive.google.com/drive/folders/1G1Sdr6yLakpk1y3dvuNog5saeLSn9msj?usp=sharing'
    }

];

const list = document.getElementById("assignment-list");

document.getElementById("total-count").textContent = assignments.length;
document.getElementById("completed-count").textContent = assignments.length;
document.getElementById("year").textContent = new Date().getFullYear();

assignments.forEach((item, index) => {
  const card = document.createElement("article");
  card.className = "assignment-card";

  const title = document.createElement("h3");
  title.textContent = `${String(index + 1).padStart(2, "0")}. ${item.title}`;
  card.appendChild(title);

  const subject = document.createElement("p");
  subject.className = "assignment-meta";
  subject.textContent = item.subject;
  card.appendChild(subject);

  const links = document.createElement("div");
  links.className = "links";

  [["View Source Code", item.github], ["View Live Website", item.live], ["Google Drive", item.drive]].forEach(([label, url]) => {
    const a = document.createElement("a");
    a.className = "resource-link";
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = label;
    links.appendChild(a);
  });

  card.appendChild(links);
  list.appendChild(card);
});

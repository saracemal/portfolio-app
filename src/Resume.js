import React from 'react';

// add resume link
function Resume() {
    axios({
        method: "get",
        url: "SaraCemalResume.pdf",
        responseType: "arraybuffer"
      })
        .then((response) => {
          var resumeLink = document.createElement("a");
          resumeLink.href = window.URL.createObjectURL(
            new Blob([response.data], { type: "application/octet-stream" })
          );
          resumeLink.download = "SaraCemalResume.pdf";
      
          document.body.appendChild(resumeLink);
      
          link.click();
          setTimeout(function () {
            window.URL.revokeObjectURL(resumeLink);
          }, 200);
        })
        .catch((error) => {});

    <div>
        {resumeLink}

    </div>
};

export default Resume;
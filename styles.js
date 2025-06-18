

    function copyPhoneNumber(number) {
      const tempInput = document.createElement("input");
      tempInput.value = number;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      alert("Phone number copied: " + number);
    }

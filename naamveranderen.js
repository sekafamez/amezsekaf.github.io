const namen = ["Amez Sekaf", "een Software Developer", "een voetballer", "Leergierig"];
        let naamIndex = 0;
        let letterIndex = 0;
        let forward = true;

        const naamElement = document.getElementById('naam');

        function toonNaam() {
            const huidigeNaam = namen[naamIndex];

            if (forward) {
                naamElement.textContent = huidigeNaam.slice(0, letterIndex + 1);
                letterIndex++;
                if (letterIndex === huidigeNaam.length) {
                    forward = false;
                    setTimeout(toonNaam, 1000);
                    return;
                }
            } else {
                naamElement.textContent = huidigeNaam.slice(0, letterIndex - 1);
                letterIndex--;
                if (letterIndex === 0) {
                    forward = true;
                    naamIndex = (naamIndex + 1) % namen.length;
                }
            }

            setTimeout(toonNaam, 100);
        }

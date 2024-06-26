
import { participantTemplate, successTemplate } from './Templates.js';

let participantCount = 1;

document.getElementById('addParticipantButton').addEventListener('click', () => {
    participantCount++;
    const newParticipant = participantTemplate(participantCount);
    document.querySelector('.participants').insertAdjacentHTML('beforeend', newParticipant);
});

document.getElementById('registrationForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const totalFee = totalFees();
    const adultName = document.getElementById('adult_name').value;
    const summaryMessage = successTemplate({ name: adultName, participants: participantCount, fees: totalFee });

    document.getElementById('registrationForm').style.display = 'none';
    const summaryElement = document.getElementById('summary');
    summaryElement.innerHTML = summaryMessage;
    summaryElement.classList.remove('hide');
});

function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements];
    return feeElements.reduce((total, feeElement) => total + parseInt(feeElement.value), 0);
}

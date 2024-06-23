let participantCount = 1;

document.getElementById('addParticipantButton').addEventListener('click', () => {
    participantCount++;
    const newParticipant = participantTemplate(participantCount);
    document.querySelector('.participants').insertAdjacentHTML('beforeend', newParticipant);
});

function participantTemplate(count) {
    return `
        <section class="participant${count}">
            <label for="name${count}">Name:</label>
            <input type="text" id="name${count}" name="name${count}" required>
            <label for="age${count}">Age:</label>
            <input type="number" id="age${count}" name="age${count}" required>
            <label for="fee${count}">Fee:</label>
            <input type="number" id="fee${count}" name="fee${count}" required>
        </section>
    `;
}
document.getElementById('registrationForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const totalFee = totalFees();
    const adultName = document.getElementById('name1').value;
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

function successTemplate(info) {
    return `Thank you ${info.name} for registering. You have registered ${info.participants} participants and owe $${info.fees} in Fees.`;
}
export function participantTemplate(count) {
    return `
        <section class="participant${count}">
            <label for="name${count}">Name:</label>
            <input type="text" id="name${count}" name="name${count}" required>
            <label for="age${count}">Age:</label>
            <input type="number" id="age${count}" name="age${count}" required>
            <label for="fee${count}">Fee:</label>
            <input type="number" id="fee${count}" name="fee${count}" required>
        </section>
    `;
}

export function successTemplate(info) {
    return `Thank you ${info.name} for registering. You have registered ${info.participants} participants and owe $${info.fees} in Fees.`;
}
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
    const adultName = document.getElementById('name1').value;
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

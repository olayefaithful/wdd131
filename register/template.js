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

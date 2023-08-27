// emailForm.js
export function setupEmailForm() {
    document.getElementById("mailbutton").addEventListener('click', function() {
        const email = document.getElementById('email').value;
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        const mailtoLink = `mailto:oswalgroup9@gmail.com?subject=Inquiry for Oswal Group&body=Hello, I am ${name} and I am interested. Below are my contact details. Phone: ${phone} Email: ${email}. ${message}`;
 
        window.location.href = mailtoLink;
    });
}

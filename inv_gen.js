window.onload = function () {


    let form = document.getElementById("form");
    let task = []

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let nm = document.getElementById("ip_nm").value
        let qty = Number(document.getElementById("ip_qty").value.trim())
        let amt = Number(document.getElementById("ip_amt").value.trim())

        if (nm == "" || qty == "" || amt == "" || isNaN(qty) || isNaN(amt)) {
            window.alert("Please enter valid data");
            document.getElementById("ip_nm").value = ''
            document.getElementById("ip_qty").value = ''
            document.getElementById("ip_amt").value = ''
        }
        else {
            task.push([nm, qty, amt])

            let tbl = document.getElementById("add_tbl")
            let newrw = tbl.insertRow(-1);
            console.log(task)
            newrw.innerHTML = `
    <td > ${nm}</td>
    <td >${qty}</td>
    <td >${amt}</td>
    `;

            nm = document.getElementById("ip_nm").value = ''
            qty = document.getElementById("ip_qty").value = ''
            amt = document.getElementById("ip_amt").value = ''
            let su = 0;
            for (let i = 0; i < task.length; i++) {
                su += Number(task[i][2])
                console.log(su)
            }
            let dt = 0;
            if (su > 20000 && dt < 25000) {
                dt = 0.1 * su
                document.getElementById("dt").innerText = -dt;
            }
            console.log(dt)
            document.getElementById("tt_amt").innerText = su - dt;
            console.log(su)
        }

    });

}
function generate_pdf() {
    tdy = new Date()

    document.getElementById("date").innerHTML = `Date:${tdy.toLocaleString()}`

    const data = document.getElementById("invoice");
    const options = {
        margin: [10, 10, 30, 10],
        filename: 'bill_invoice.pdf',
        image: { type: 'pdf', quality: 1 },
        html2canvas: { scale: 3, scrollY: 0 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(options).from(data).save();
}

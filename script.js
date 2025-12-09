// Load previous orders on page load
document.addEventListener("DOMContentLoaded", loadOrders);

// Save an order
function orderProduct(name, price) {
    const order = { name, price, date: new Date().toLocaleString() };

    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);

    localStorage.setItem("orders", JSON.stringify(orders));

    loadOrders();
}

// Display orders
function loadOrders() {
    const orderList = document.getElementById("orderList");
    if (!orderList) return; // Only run on index.html

    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    orderList.innerHTML = "";

    orders.forEach(order => {
        const li = document.createElement("li");
        li.textContent = `${order.name} - $${order.price} (Ordered at ${order.date})`;
        orderList.appendChild(li);
    });
}

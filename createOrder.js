function createOrder(data) {
  const order = {
    id: `order_${Date.now()}`,
    user: data.user,
    status: "pending",
    createdAt: new Date().toISOString(),
    orderItems: data.orderItems,
    shippingAddress: {
      address: data.address,
      city: data.city,
      country: data.country,
      email: data.email,
      fullName: data.fullName,
      zip: data.zip,
    },
    totalPrice: Number(data.totalPrice) || 0,
    paymentInfo: {
      paymentMethod: "card",
      cardNumber: data.cardNumber,
      expiry: data.expiry,
    },
  };

  // Get existing orders
  const allOrders = JSON.parse(localStorage.getItem("orders")) || [];

  // Add new order
  allOrders.push(order);

  // Save back
  const saveOrder = localStorage.setItem("orders", JSON.stringify(allOrders));

  alert(`Order placed successfully!`);
  window.location.href = `order.html?orderId=${order?.id}`;
  localStorage.removeItem("cart");

  return saveOrder;
  //   return localStorage.setItem("order", JSON.stringify(order));
}
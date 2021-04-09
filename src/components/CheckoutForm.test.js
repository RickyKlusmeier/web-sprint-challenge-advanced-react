import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", async () => {
    render(<CheckoutForm/>)
    const header = await screen.getByText('Checkout Form')
    expect(header).toBeVisible
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm/>)

    const firstName = screen.getByLabelText("First Name:")
    const lastName = screen.getByLabelText("Last Name:")
    const address = screen.getByLabelText("Address:")
    const city = screen.getByLabelText("City:")
    const state = screen.getByLabelText("State:")
    const zip = screen.getByLabelText("Zip:")
    const checkoutButton = screen.getByRole("button")

    userEvent.type(firstName, "Ricky")
    userEvent.type(lastName, "Klus")
    userEvent.type(address, "123 Amazon")
    userEvent.type(city, "Broomfield")
    userEvent.type(state, "CO")
    userEvent.type(zip, "80023")
    userEvent.click(checkoutButton)

    const successMessage = await screen.getByText(/You have ordered some plants! Woo-hoo!/i)
    expect(successMessage).toBeVisible


});

import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
    const header = screen.queryByText(/Checkout Form/i)
    expect(header).toBeInTheDocument();
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


    await waitFor (() => { 
    const successMessage = screen.getByText(/You have ordered some plants! Woo-hoo!/i)
    expect(successMessage).toBeInTheDocument();
    })

});

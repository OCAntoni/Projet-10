import { fireEvent, render, screen } from "@testing-library/react";
import Form from "./index";

describe("When Events is created", () => {
  it("a list of event card is displayed", async () => {
    render(<Form />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success action is called", async () => {
      const onSuccess = jest.fn(); //* creation mock fonction
      render(<Form onSuccess={onSuccess} />);
      await screen.findByText("Envoyer"); //* replacement du await envoyer qui était en fin de test et provoquer un warning
      fireEvent( //* simule click sur boutton de soumission
        await screen.findByTestId("button-test-id"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      expect(onSuccess).toHaveBeenCalled();
    });
  });
});

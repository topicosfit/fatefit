import { Button } from "../../button/button";
import { AddressInfo } from "../address-info/address-info";
import { PaymentInfo } from "../payment-info/payment-info";
import { PersonalInfo } from "../personal-info/personal-info";

export function CheckoutForm() {
    return (
      <div className="
          flex
          flex-col
          gap-8
      ">
          <div className="
            flex
            gap-8
          ">
            <PersonalInfo />
            <AddressInfo />
          </div>
          <div className="
            flex
            flex-col
            gap-8
          ">
            <PaymentInfo />
            <div className="flex justify-center">
              <Button background="#42AD60" text="FINALIZAR" textColor="white" />
            </div>
          </div>          
      </div>
    )
}

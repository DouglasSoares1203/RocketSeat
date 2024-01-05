import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { QuantityInput } from "../../components/Form/QuantityInput";
import { Radio } from "../../components/Form/Radio";
import { TextInput } from "../../components/Form/TextInput";
import {
  AddressContainer,
  AddressForm,
  AddressHeading,
  CartTotal,
  Container,
  InfoContainer,
  PaymentContainer,
  PaymentErrorMessage,
  PaymentHeading,
  PaymentOptions,
} from "./styles";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from "@phosphor-icons/react";
import { useCart } from "../../hooks/useCart";
import { useForm } from "react-hook-form";

type FormInputs = {
  cep: number;
  street: string;
  number: string;
  fullAddress: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentMethod: "credit" | "debit" | "cash";
};

const newOrder = z.object({
  cep: z.number({ invalid_type_error: "Informe o CEP" }),
  street: z.string().min(1, "Informe a rua"),
  number: z.string().min(1, "Informe o número"),
  fullAddress: z.string(),
  neighborhood: z.string().min(1, "Informe o bairro"),
  city: z.string().min(1, "Informe a cidade"),
  state: z.string().min(1, "Informe a UF"),
  paymentMethod: z.enum(["credit", "debit", "cash"], {
    invalid_type_error: "Informe um método de pagamento",
  }),
});

export type OrderInfo = z.infer<typeof newOrder>;

const shippingPrice = 3.5;

export function Cart() {
  const {
    cart,
    checkout,
    incrementItemQuantity,
    decrementItemQuantity,
    removeItem,
  } = useCart();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(newOrder),
  });

  const selectedPaymentMethod = watch("paymentMethod");

  return (
    <Container>
      <InfoContainer>
        <h2>Complete seu pedido</h2>
        <form>
          <AddressContainer>
            <AddressHeading>
              <MapPin size={22} />
              <div>
                <span>Endereço de Entrega</span>

                <p>Informe o endereço onde deseja receber o seu pedido</p>
              </div>
            </AddressHeading>

            <AddressForm>
              <TextInput
                placeholder="CEP"
                type="number"
                containerProps={{ style: { gridArea: "cep" } }}
                error={errors.cep}
                {...register("cep", { valueAsNumber: true })}
              />

              <TextInput
                placeholder="Rua"
                containerProps={{ style: { grid: "street" } }}
                error={errors.street}
                {...register("street")}
              />

              <TextInput
                placeholder="Número"
                containerProps={{ style: { gridArea: "number" } }}
                error={errors.number}
                {...register("number")}
              />
              <TextInput
                placeholder="Complemtento"
                optimal
                containerProps={{ style: { gridArea: "fullAddress" } }}
                error={errors.fullAddress}
                {...register("fullAddress")}
              />
              <TextInput
                placeholder="Bairro"
                containerProps={{ style: { gridArea: "neighborhood" } }}
                error={errors.neighborhood}
                {...register("neighborhood")}
              />
              <TextInput
                placeholder="Cidade"
                containerProps={{ style: { gridArea: "city" } }}
                error={errors.city}
                {...register("city")}
              />
              <TextInput
                placeholder="UF"
                containerProps={{ style: { gridArea: "state" } }}
                error={errors.state}
                {...register("state")}
              />
            </AddressForm>
          </AddressContainer>

          <PaymentContainer>
            <PaymentHeading>
              <CurrencyDollar size={22} />
              <div>
                <span>Pagamento</span>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </PaymentHeading>

            <PaymentOptions>
              <div>
                <Radio
                  isSelected={selectedPaymentMethod === "credit"}
                  {...register("paymentMethod")}
                  value="credit"
                >
                  <CreditCard size={16} />
                  <span>Cartão de Crédito</span>
                </Radio>
                <Radio
                  isSelected={selectedPaymentMethod === "debit"}
                  {...register("paymentMethod")}
                  value="debit"
                >
                  <Bank size={16} />
                  <span>Cartão de Débito</span>
                </Radio>
                <Radio
                  isSelected={selectedPaymentMethod === "cash"}
                  {...register("paymentMethod")}
                  value="cash"
                >
                  <Money size={16} />
                  <span>Dinheiro</span>
                </Radio>
              </div>
              {errors.paymentMethod ? (
                <PaymentErrorMessage role="alert">
                  {errors.paymentMethod?.message}
                </PaymentErrorMessage>
              ) : null}
            </PaymentOptions>
          </PaymentContainer>
        </form>
      </InfoContainer>

<InfoContainer>
    <h2>Café selecionados</h2>

    <CartTotal>
        
    </CartTotal>
</InfoContainer>


    </Container>
  );
}

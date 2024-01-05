import {
  HtmlHTMLAttributes,
  InputHTMLAttributes,
  LegacyRef,
  forwardRef,
  useState,
} from "react";
import { FieldError } from "react-hook-form";
import { Box, Container, ErrorMessage } from "./styles";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  optimal?: boolean;
  containerProps?: HtmlHTMLAttributes<HTMLDivElement>;
  error?: FieldError;
};

export const TextInput = forwardRef(function TextInput(
  { optimal, error, containerProps, onFocus, onBlur, ...rest }: Props,
  ref: LegacyRef<HTMLInputElement>
) {
  const [isFocused, setIsFocused] = useState(false);

  function handleFocus(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(true);
    onFocus?.(event);
  }
  function handleBlur(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(false);
    onBlur?.(event);
  }

  return (
    <Box {...containerProps}>
      <Container data-state={isFocused ? "focused" : "blurred"}>
        <input type="text" ref={ref} {...rest} />
        {optimal ? <span>Opcional</span> : null}
      </Container>

      {error?.message ? (
        <ErrorMessage role="alert">{error.message}</ErrorMessage>
      ) : null}
    </Box>
  );
});

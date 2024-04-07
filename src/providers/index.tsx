import { PropsWithChildren } from "react";
import AuthProvider from "src/providers/auth-provider";
import { CartProvider } from "src/providers/cart-provider";
import ReactQueryProvider from "src/providers/react-query-provider";
import ReduxProvider from "src/providers/redux-provider";
import { LanguageProvider } from "src/providers/language/language-provider";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <AuthProvider>
      <ReactQueryProvider>
        <ReduxProvider>
          <CartProvider>
            <LanguageProvider language="en">
              <Theme>{children}</Theme>
            </LanguageProvider>
          </CartProvider>
        </ReduxProvider>
      </ReactQueryProvider>
    </AuthProvider>
  );
};

export default Providers;

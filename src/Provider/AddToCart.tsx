import { createContext, useContext, useEffect, useState } from "react";

const CardContext = createContext<any>(null);

export const useCard = () => useContext(CardContext);

export const CardProvider = ({ children }: any) => {
  const savedCard = JSON.parse(localStorage.getItem("Product") || "[]");
  const [Card, SetCard] = useState<any[]>(savedCard);

  useEffect(() => {
    localStorage.setItem("Product", JSON.stringify(Card));
  }, [Card]);

  const AddToCard = (product: any) => {
    const ExistProduct = Card.find((item) => item.id === product.id);
    if (ExistProduct) {
      const NewCard = Card.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      SetCard(NewCard);
    } else {
      const updatedCard = [
        ...Card,
        { ...product, quantity: 1, price: product.discountprice },
      ];
      SetCard(updatedCard);
      localStorage.setItem("Product", JSON.stringify(updatedCard));
    }
  };

  const RemoveProduct = (productId: number) => {
    const NewCard = Card.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
    ).filter((item) => item.quantity > 0);
    SetCard(NewCard);
  };

  const ClearCard = () => SetCard([]);

  const IncreaseProduct = (productId: number) => {
    const NewCard = Card.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    SetCard(NewCard);
  };

  const TotalPrice = () => {
    return Card.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const DeleteProduct = (item: any) => {
    const updatedCart = Card.filter((cartItem) => cartItem.id !== item.id);
    SetCard(updatedCart);
    localStorage.setItem("Product", JSON.stringify(updatedCart));
  };

  return (
    <CardContext.Provider
      value={{
        AddToCard,
        RemoveProduct,
        ClearCard,
        IncreaseProduct,
        TotalPrice,
        Card,
        DeleteProduct,
        SetCard,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

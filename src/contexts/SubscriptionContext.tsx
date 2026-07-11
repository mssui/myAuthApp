// isPremium

// purchase()

// restore()

// loading

// initialize()

// purchasePremium()

// restorePurchases()

// getCustomerInfo()

type SubscriptionContextType = {
  isPremium: boolean;
  loading: boolean;

  purchasePremium: () => Promise<void>;
  restorePurchases: () => Promise<void>;
};
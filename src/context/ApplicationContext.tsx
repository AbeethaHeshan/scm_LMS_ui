import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  role: string;
  id?: string;
  email: string;
  password?: string; // remoe this in future
}

interface ApplicationContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}

const ApplicationContext = createContext<ApplicationContextType | undefined>(
  undefined,
);

interface ApplicationProviderProps {
  children: ReactNode;
}

export const ApplicationProvider: React.FC<ApplicationProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    setUser,
    logout,
  };

  return (
    <ApplicationContext.Provider value={value}>
      {children}
    </ApplicationContext.Provider>
  );
};

export const useApplicationContext = (): ApplicationContextType => {
  const context = useContext(ApplicationContext);

  if (context === undefined) {
    throw new Error(
      'useApplicationContext must be used within an ApplicationProvider',
    );
  }

  return context;
};

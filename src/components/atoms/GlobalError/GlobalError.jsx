// src/components/atoms/GlobalError/GlobalError.jsx
export default function GlobalError({ message }) {
    if (!message) return null;
    return <div role="alert" className="global-error">{message}</div>;
  }
  
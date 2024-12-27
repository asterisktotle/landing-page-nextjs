type ButtonProps = {
    type: 'button'  | 'submit';
    title: string;
    icon?: string;
    variant: string;
}

import Image from "next/image";

export const Button = ({type, title, icon, variant}: ButtonProps) => {
  return (
    <button
       type={type}    
       className={`flexCenter gap-3 rounded-full border ${variant}`}
    > 
        {icon && <Image src={icon} alt={title} width={24} height={24}/>}
    </button>
  )
}

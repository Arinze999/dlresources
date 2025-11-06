import Image from 'next/image';
import Link from 'next/link';

const CompanyLogo = ({
  textClass,
  close,
  // white,
  // blue,
}: {
  textClass?: string;
  close?: () => void;
  // white?: boolean;
  // blue?: boolean;
}) => {
  return (
    <Link href={'/'}>
      <h3
        className={`font-black text-deolaDarkGreen text-[24px] flex items-end gap-0 relative  ${textClass}`}
        onClick={close}
      >
          <Image
            src={'/images/deolaLogo.png'}
            alt="logo"
            height={50}
            width={50}
            className="mr-3 rounded-lg"
          />
        <span className="hidden md:flex">Deola Resources</span>
      </h3>
    </Link>
  );
};

export default CompanyLogo;

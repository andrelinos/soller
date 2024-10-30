import Image from 'next/image'

import { Link } from '../link'

export function Footer() {
  return (
    <div id="footer" className="flex w-full px-4 pb-20 lg:px-20">
      <div className="flex min-h-24 w-full flex-col items-center justify-between py-6 md:flex-row">
        <div className="flex flex-col items-center gap-6 md:flex-row">
          <Image
            width={127}
            height={32}
            src="/assets/images/soller-logo.svg"
            className="h-auto w-[127px]"
            alt=""
            priority
          />

          <p>@ {new Date().getFullYear()} Soller, Inc. All rights reserved.</p>
        </div>
        <ul className="flex gap-6">
          <li>
            <Link
              className="m-0 p-0 text-base text-brand-text-primary"
              variant="link"
              href="/terms"
            >
              Terms
            </Link>
          </li>
          <li>
            <Link
              className="m-0 p-0 text-base text-brand-text-primary"
              variant="link"
              href="/privacy"
            >
              Privacy
            </Link>
          </li>
          <li>
            <Link
              className="m-0 p-0 text-base text-brand-text-primary"
              variant="link"
              href="/support"
            >
              Support
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

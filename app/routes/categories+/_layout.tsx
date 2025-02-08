import { withEmotionCache } from "@emotion/react";
import { useInjectStyles } from "../../emotion/emotion-client";

interface LayoutProps extends React.PropsWithChildren {}

export const Layout = withEmotionCache((props: LayoutProps, cache) => {
  const { children } = props;

  useInjectStyles(cache);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/categories">categories</a>
          </li>
          <li>
            <a href="categories/1">category 1</a>
          </li>
          <li>
            <a href="/categories/2">category 2</a>
          </li>
          <li>
            <a href="/categories/3">category 3</a>
          </li>
        </ul>
      </nav>

      <main>{children}</main>
    </div>
  );
});

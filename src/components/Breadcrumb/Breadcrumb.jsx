import { cn } from '@utils/cn';
import PropTypes from 'prop-types';

/**
 * Example:
 * const pages = [
 *   { label: 'Home', href: '/' },
 *   { label: 'Products', href: '/products' },
 *   { label: 'Shoes' },  // last item = current page (no link)
 * ];
 *
 * <Breadcrumb items={pages} />
 */
export const Breadcrumb = ({
  items = [],
  separator = '>',
  className,
  ...props
}) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn('text-sm', className)}
      {...props}
    >
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => {
          const isLastItem = index === items.length - 1;

          return (
            <li key={index} className="inline-flex items-center gap-1.5">
              {index > 0 && (
                <span className="text-gray-400 select-none" aria-hidden="true">
                  {separator}
                </span>
              )}
              {isLastItem ? (
                <span className="font-medium text-gray-900" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href}
                  className="text-gray-500 hover:text-primary-600 transition-colors"
                >
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
    })
  ).isRequired,

  separator: PropTypes.string,

  className: PropTypes.string,
};

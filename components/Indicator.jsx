import styles from '@/app/page.module.css';

export default function Indicator(props){
    return (
        <li>
            <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white me-3">
                <span className={`flex w-3.5 h-2.5 rounded-full me-1.5 flex-shrink-0 ${props.color}`}></span>{props.children}
            </span>
        </li>
    );
}
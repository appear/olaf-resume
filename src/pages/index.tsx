import ko from 'date-fns/locale/ko';
import fnsFormat from 'date-fns/format';

;
function IndexPage() {
    return <div>Index {fnsFormat(new Date(), 'yyyy-MM-dd', { locale: ko })}</div>
}

export default IndexPage
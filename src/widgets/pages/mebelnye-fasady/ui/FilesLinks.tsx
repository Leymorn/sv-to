import Link from '@/widgets/shared/ui/Link';

export default function FilesLinks() {
    return (
        <div className="flex flex-col md:flex-row gap-5 mb-10 md:mb-20">
            <div className="w-full">
                <span className="font-medium text-xl pb-2">Внимание!</span>
                <br />
                Для фасадов МДФ с покрытием пленкой ПВХ существуют стандартные
                размерные ряды. Обратите внимание, что для некоторых моделей
                фасадов используется фиксированный шаг по ширине или высоте.
            </div>
            <div className="flex flex-col gap-2 w-full">
                {/* TODO: add link */}
                <Link
                    href={'/'}
                    text="Таблица стандартных размеров"
                    type="outline"
                    classList="w-full text-center"
                />
                <Link
                    href={'/files/ТУ_и_правила_приемки_фасадов_СВ_ТО.pdf'}
                    text="Нормы допуска по качеству покрытия мебельных фасадов"
                    type="outline"
                    target="_blank"
                    classList="w-full text-center"
                />
            </div>
        </div>
    );
}

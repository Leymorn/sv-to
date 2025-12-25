import { useState } from 'react';
import Button, { ButtonVariant } from '@/shared/ui/Button';
import KruchkiPanel from './KruchkiPanel';
import PolkiPanel from './PolkiPanel';
import KronshteinyPanel from './KronshteinyPanel';
import RaznyePanel from './RaznyePanel';

type TabId = 'hooks' | 'shelf-holders' | 'brackets' | 'other';

const PANELS: { id: TabId; name: string }[] = [
    { id: 'hooks', name: 'Крючки на эконом-панель' },
    { id: 'shelf-holders', name: 'Держатели для полок на эконом-панель' },
    {
        id: 'brackets',
        name: 'Кронштейны для вешалок на эконом-панель',
    },
    { id: 'other', name: 'Аксессуары для эконом-панели разные' },
];

export default function AksessuaryPanelsSwitch() {
    const [activeTab, setActiveTab] = useState<TabId>('hooks');

    return (
        <>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-6 md:mb-8">
                {PANELS.map((panel) => (
                    <Button
                        key={panel.id}
                        text={panel.name}
                        onClick={() => setActiveTab(panel.id)}
                        type={
                            activeTab === panel.id
                                ? ButtonVariant.DEFAULT
                                : ButtonVariant.OUTLINE
                        }
                        ariaPressed={activeTab === panel.id}
                        classList="w-full sm:w-fit"
                    />
                ))}
            </div>

            <KruchkiPanel show={activeTab === 'hooks'} />
            <PolkiPanel show={activeTab === 'shelf-holders'} />
            <KronshteinyPanel show={activeTab === 'brackets'} />
            <RaznyePanel show={activeTab === 'other'} />
        </>
    );
}

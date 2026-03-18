interface ForumRulesProps {
    rules: string[];
}

export function ForumRules({ rules }: ForumRulesProps) {
    return (
        <div className="bg-white rounded-lg p-6 mb-4">
            <h3 className="text-lg font-bold mb-4">Ten dien dan RULES</h3>

            <ol className="space-y-2">
                {rules.map((rule, index) => (
                    <li key={index} className="text-sm text-gray-700">
                        {index + 1} {rule}
                    </li>
                ))}
            </ol>
        </div>
    );
}

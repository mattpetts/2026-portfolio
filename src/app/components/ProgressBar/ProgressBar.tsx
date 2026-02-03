interface ProgressBarProps {
    progress: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;
    color?: string;
}

const ProgressBar = ({ progress, color }: ProgressBarProps) => {
    return (
        <div className="w-full h-8 border rounded flex items-center justify-start p-1">
            <div className={`h-6 bg-black rounded`} style={{ 'width': progress + '%' }}></div>
        </div>
    );
};

export default ProgressBar;

export const LightThemeDecorator = ({children}: {children: React.ReactNode}) => {
    return (    
        <div className="app light storytest">
            {children}
        </div>
    )
}

export const DarkThemeDecorator = ({children}: {children: React.ReactNode}) => {
    return (    
        <div className="app dark storytest">
            {children}
        </div>
    )
}
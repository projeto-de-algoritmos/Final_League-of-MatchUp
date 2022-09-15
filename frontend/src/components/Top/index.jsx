
export function Top({ position, name, image, percentage}) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            backgroundColor: 'white',
            borderRadius: '10px',
            marginTop: '50px',
            justifyContent: 'start',
            height: '150px',
            width: '500px',
        }}>
            <h1 style={{
                padding: '30px'
            }}>{position}</h1>
            <img src={image} alt={name} style={{
                height: '100px',
                width: '100px',
                borderRadius: '10px'
            }} />
            <div style={{
                width: '290px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <h2 style={{
                    paddingLeft: '30px'
                }}>{name}</h2>
                <h2 style={{
                    paddingLeft: '30px'
                }}>{percentage}%</h2>
            </div>
        </div>
    )
}

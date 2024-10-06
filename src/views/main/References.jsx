import { useState } from 'react';
import './References.css';

function References() {
    // Initial state for references
    const [references, setReferences] = useState([
        { name: 'Mr Nkomo', description: 'Principal', email: 'kenilworthsec@gmail.com', phone: '+27116831416' },
        { name: 'Ms Styn', description: 'Founder of Lejwe La Motheo', email: 'sandystyn@gmail.com', phone: '+27832933082' }
    ]);

    const [newReference, setNewReference] = useState({ name: '', description: '', email: '', phone: '' });

    // Function to add a new reference
    const addReference = () => {
        setReferences(prevReferences => [...prevReferences, newReference]);
        setNewReference({ name: '', description: '', email: '', phone: '' }); // Clear input
    };

    // Function to remove a reference
    const removeReference = (index) => {
        setReferences(prevReferences => prevReferences.filter((_, i) => i !== index));
    };

    return (
        <section className="references">
            <h2>References</h2>
            <ul>
                {references.map((ref, index) => (
                    <li key={index}>
                        <p><strong>{ref.name}</strong> - {ref.description}</p>
                        <p>Email: {ref.email} | Phone: {ref.phone}</p>
                        <button className='ref-minus' onClick={() => removeReference(index)}>-</button>
                    </li>
                ))}
            </ul>

            <section className='ref-inputs'>
                <input 
                    type="text" 
                    value={newReference.name} 
                    onChange={(e) => setNewReference({ ...newReference, name: e.target.value })}
                    placeholder="Reference name"
                />
                <input 
                    type="text" 
                    value={newReference.description} 
                    onChange={(e) => setNewReference({ ...newReference, description: e.target.value })}
                    placeholder="Reference description"
                />
                <input 
                    type="email" 
                    value={newReference.email} 
                    onChange={(e) => setNewReference({ ...newReference, email: e.target.value })}
                    placeholder="Reference email"
                />
                <input 
                    type="tel" 
                    value={newReference.phone} 
                    onChange={(e) => setNewReference({ ...newReference, phone: e.target.value })}
                    placeholder="Reference phone"
                />
                <button onClick={addReference}>+</button>
            </section>
        </section>
    );
}

export default References;

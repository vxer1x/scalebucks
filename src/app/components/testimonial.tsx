import '@/app/components/global.css'

export default function TestimonialComp() {
    return (
        <div className="testimonial">
            <div className="comment-card">
                <img src="user.png" alt="User 1" />
                <div className="comment-content">
                    <div className="name-rating">
                        <h3>John Doe</h3>
                        <span className="rating">⭐⭐⭐⭐⭐</span>
                    </div>
                    <p>"Amazing service! Highly recommend."</p>
                </div>
            </div>

            <div className="comment-card">
                <img src="user.png" alt="User 2" />
                <div className="comment-content">
                    <div className="name-rating">
                        <h3>Jane Smith</h3>
                        <span className="rating">⭐⭐⭐⭐</span>
                    </div>
                    <p>"Great experience, would use again!"</p>
                </div>
            </div>
        </div>
    );
}
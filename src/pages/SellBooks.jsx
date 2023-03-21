import React from 'react'

function SellBooks() {
    return (
        <form action="">

            <div class="mb-3">
                <label for="" class="form-label">Phone number</label>
                <input type="number"
                    class="form-control form-control-lg" name="phNumber" id="phNumber" aria-describedby="helpId" placeholder="" />
            </div>
            <div class="mb-3">
                <label for="title" class="form-label">Book Title</label>
                <input type="text"
                    class="form-control form-control-lg" name="title" id="title" aria-describedby="helpId" placeholder="" />
            </div>

            <div className="row">
                <div className="col-8">
                    <div class="mb-3">
                        <label for="location" class="form-label">Location</label>
                        <input type="text"
                            class="form-control form-control-lg" name="location" id="location" aria-describedby="helpId" placeholder="" />
                    </div>
                </div>
                <div className="col-4">
                    <div class="mb-3">
                        <label for="price" class="form-label">Price</label>
                        <input type="number"
                            class="form-control form-control-lg" name="price" id="price" aria-describedby="helpId" placeholder="" />
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Choose file</label>
                <input type="file" class="form-control" name="" id="" placeholder="" aria-describedby="fileHelpId" />
            </div>
            <button type="Submit" class="btn btn-primary">Button</button>

        </form>
    )
}

export default SellBooks
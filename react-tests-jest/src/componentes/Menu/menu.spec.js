import { render, screen } from "@testing-library/react";
import Menu from './index'

test(
    'Should render link from home page.', () => {
        render(<Menu/>)
        const linkInicialPage = screen.getByText('Inicial')
        expect(linkInicialPage).toBeInTheDocument() 
    }
)

test(
    'Should render all links from home page.', () => {
        render(<Menu/>)
        const links = screen.getAllByRole('link')
        expect(links).toHaveLength(4)
    }
)

test(
    'Should not render links from extrato.', () => {
        render(<Menu/>)
        const linkExtrato = screen.queryByText('Extrato')
        expect(linkExtrato).not.toBeInTheDocument()
    }
)

test(
    'Should render a links list with link class.', () => {
        render(<Menu/>)
        const links = screen.getAllByRole('link')
        links.forEach((link) => expect(link).toHaveClass('link'))
        expect(links).toMatchSnapshot()
    }
)
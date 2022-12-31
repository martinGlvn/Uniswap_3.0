import { ethers } from 'ethers'
import UniswapABI from '../utils/Uniswap.json'
import CustomTokenABI from '../utils/CustomToken.json'

export const tokenContract = async address => {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const { ethereum } = window

  if (ethereum) {
    const signer = provider.getSigner()

    const contractReader = new ethers.Contract(address, CustomTokenABI, signer)

    return contractReader
  }
}

export const contract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const { ethereum } = window

  if (ethereum) {
    const signer = provider.getSigner()
    const contractReader = new ethers.Contract(
      '',
      CustomDexABI.abi,
      signer,
    )

    return contractReader
  }
} 